CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    pass TEXT NOT NULL,
    about TEXT,
    birthdate DATE
);

CREATE TABLE IF NOT EXISTS user_address(
    user_id INTEGER NOT  NULL,
    street TEXT,
    states TEXT,
    city TEXT,
    zip INTEGER,
    FOREIGN KEY(user_id) REFERENCES users(id) on DELETE CASCADE
);