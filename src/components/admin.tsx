import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './AdminPage.css';
interface PageConditions {
    page2:[string,string],
    page3:[string]
}
const AdminPage: React.FC = () => {
    const [page2, setPage2] = useState<Array<string>>([]);
    const [page3, setPage3] = useState<string>('');
    const [options, setOptions] = useState<Array<string>>(['about', 'address', 'birthdate']);
    const [PageConditions, setPageConditions] = useState<PageConditions>({
            page2:['about', 'birthdate'],
            page3:['address']
        });
    useEffect(() => {
        const checkFields = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:5000/fields");
                const fields = response.data;
                setPageConditions(fields);
                setPage2(fields.page2 || []);
                setPage3(fields.page3[0] || ''); 
            } catch (error) {
                console.error("error fetching fields:", error);
            }
        };
        checkFields();
    }, []);

    const sendFields = async () => {
        try {
            const results = {
                page2: page2,
                page3: page3,
            };
            const response = await axios.post("http://127.0.0.1:5000/fields", results);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    const handlePage2Change = (index: number, value: string) => {
        const updatedPage2 = [...page2];
        updatedPage2[index] = value;
        setPage2(updatedPage2);
    };

    const handlePage3Change = (value: string) => {
        setPage3(value);
    };

    const getAvailableOptions = (selectedValues: Array<string>) => {
        return options.filter(option => !selectedValues.includes(option));
    };

    return (
        <div className="admin-container">
            <div className="column">
                <h2>Page 2</h2>
                {page2.map((selectedOption, index) => (
                    <div key={index}>
                        <select
                            className="select-dropdown"
                            value={selectedOption || ''}
                            onChange={(e) => handlePage2Change(index, e.target.value)}
                        >
                            <option value="">Select an option</option>
                            {getAvailableOptions([...page2, page3]).map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
                {page2.length < 2 && (
                    <button className="add-field-button" onClick={() => setPage2([...page2, ''])}>Add Field</button>
                )}
            </div>
            <div className="column">
                <h2>Page 3</h2>
                <select
                    className="select-dropdown"
                    value={page3}
                    onChange={(e) => handlePage3Change(e.target.value)}
                >
                    <option value="">Select an option</option>
                    {getAvailableOptions([...page2]).map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            <div className="submit-button-container">
                <button onClick={sendFields}>Submit</button>
            </div>
        </div>
    );
};

export default AdminPage;
