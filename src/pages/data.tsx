// /pages/admin.tsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface UserData {
    id: number;
    email: string;
    about: string | null;
    birthdate: string | null;
    street: string;
    city: string;
    states: string;
    zip: string | number;
}

const DataPage: React.FC = () => {
    const [data, setData] = useState<UserData[]>([]);
    useEffect(() => {
        const loadData = async () => {
            try{
                const response = await axios.get("http://127.0.0.1:5000/display");
                const data = JSON.parse(response.data.success)
                setData(data)
            } catch (error){
                console.error("error fetching data:", error);
            }
        };
        loadData();
    }, [])

    return (
        <div suppressHydrationWarning>
            <h1 className="header">Data Panel</h1>
            <table id="data-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>About</th>
                        <th>Birthdate</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.about || 'N/A'}</td>
                            <td>{item.birthdate || 'N/A'}</td>
                            <td>{item.street}</td>
                            <td>{item.city}</td>
                            <td>{item.states}</td>
                            <td>{item.zip}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataPage;