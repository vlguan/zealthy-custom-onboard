import React, {useEffect, useState} from 'react';
// import axios from 'axios';
interface AddressPageProps {
    onDataChange: (address: { street: string; city: string; state: string; zip: string }) => void;
}
const AddressPage: React.FC<AddressPageProps> = ({onDataChange}) => {
    const [street, setStreet] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [state, setState] = useState<string>('');
    const [zip, setZip] = useState<string>('');
    useEffect(()=>{
        if(street && city && state && zip){
            onDataChange({street,city,state,zip});
        }
            
        },[street,city,state,zip])
    return (
        <div className='form-object'>
            <h2>Address</h2>
            <input type="text" placeholder="Street" value={street} onChange={(e) => setStreet(e.target.value)} />
            <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
            <input type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} />
            <input type="text" placeholder="Zip" value={zip} onChange={(e) => setZip(e.target.value)} />
        </div>
    );
};

export default AddressPage;