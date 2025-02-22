from flask import Flask, jsonify, request, abort, g

import json
import os
import sqlite3
import bcrypt
DATABASE = 'instance/app.db'

app = Flask(__name__)
#when adding fields, add input type, and header in json
#load json into database
#when removing, search for id in json? n remove

FIELDS_FILE = 'field_states.json'
if not os.path.exists(FIELDS_FILE):
    with open(FIELDS_FILE, 'w') as f:
        json.dump([], f)

os.makedirs('instance', exist_ok=True)

def init_db():
    with app.app_context():
        db = get_db()
        with app.open_resource('schema.sql', mode='r') as f:
            db.executescript(f.read())
        db.commit()
def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
        db.row_factory=sqlite3.Row
    return db
@app.teardown_appcontext
def close_connection(exception):
    db=getattr(g,'_database', None)
    if db is not None:
        db.close()

init_db()

@app.route('/fields', methods=['POST'])
def update_fields():
    data = request.json
    if not data:
        return jsonify({"error": "invalid data"}), 400
    with open(FIELDS_FILE, 'w') as f:
        json.dump(data,f,indent=4)
    return jsonify({"message":"Field updated succesfully", "field": data}), 201
@app.route('/fields', methods=['GET'])
def load_fields():
    with open(FIELDS_FILE, 'r')  as f:
        fields = json.load(f)
    return fields
@app.route('/register', methods=['POST'])
def register():
    email=request.form['email']
    password=request.form['password']
    if not email or not password:
        return jsonify({'error' : 'Email and password are required'}), 400
    db = get_db()
    cursor = db.cursor()
    password = password.encode('utf-8')
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password, salt)
    print(email, hashed_password)
    try:
        cursor.execute(
            "INSERT INTO users (email, pass) VALUES (?,?);", (email,hashed_password)
        )
        db.commit()
        inserted_id = cursor.lastrowid
        db.close()
    except sqlite3.IntegrityError:
        return jsonify({'error': 'Email already exists'}),400
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    return jsonify({'success': 'user registered', 'id':inserted_id}), 201
@app.route('/login', methods=['POST'])
def login():
    email=request.form['email']
    password=request.form['password']
    print(email, password)
    if not (email or password):
        return jsonify({'error':'email and password are required'}), 400
    db = get_db()
    try:
        user = db.execute(
            "SELECT * FROM users WHERE email = ?;", (email,)
        ).fetchone()
        db.close()
        if not user or not bcrypt.checkpw(password.encode('utf-8'), user['pass']):
            return jsonify({'error': 'invalid user or password'}), 401
        return jsonify({'success': 'login successful'}), 200
        
    except Exception as e:
        return jsonify({'error': str(e)})
@app.route('/info', methods=['POST'])
def info():
    '''
    fields = {
        about: 'I love coding!',
        address: {
            street: 'abc street',
            city: 'gotham city',
            state: 'CA',
            zip: 12345

        }
        birthdate: 02/01/2004
    }
    '''
    user_id = request.id
    fields = request.fields

    # field_mappings = {
    #     "about": ("users", "about"),
    #     "state": ("user_address", "states"),
    #     "city": ("user_address", "city"),
    #     "zip": ("user_address", "zip"),
    #     "birthdate": ("users", "birthdate"),   
    # }
    db=get_db()
    try:
        for key, value in fields:
            if value:
                if key == 'about' or key == 'birthdate':
                    db.execute(
                            f"UPDATE users SET {key} = ? WHERE id = {user_id};",
                            (value, user_id)
                        )
                elif key == 'address':
                    db.execute(
                        "INSERT INTO user_address (street, states, city, zip) WHERE id = ?  VALUES (?,?,?,?,?);" (value.street,value.state,value.city,value.zip_code,  user_id)
                    )
                else:
                    return jsonify({'error': 'Json format incorrect'}),401
        db.commit()
        return jsonify({'success':'Data inputted successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)})
        