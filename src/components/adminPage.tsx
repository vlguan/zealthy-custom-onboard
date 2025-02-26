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
                // console.log(fields.page2)
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
            const allSelectedOptions = [...page2,page3];
            const uniqueOptions = new Set(allSelectedOptions);
            console.log(page2, page3)
            //check if user has inputted page options with constraints described in doc
            if(page2.toString() === ["",""].toString() || page3.toString() === "b".toString()){
                console.log(page2,page3)
                alert('Error: You need to atleast one component per page!')
                return;
            //validator to check if unique options are selected in admin component
            }else if (uniqueOptions.size != allSelectedOptions.length){
                alert("Error: Duplicate options are not allowed!")
                return;
            }
            const results = {
                page2: page2,
                page3: page3,
            };
            const response = await axios.post("http://127.0.0.1:5000/fields", results);
            console.log(response);
            alert('Successfully changed user onboarding workflow')
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
    return (
        <div className="admin-container">
            <p className="instructions">Select User workflow for Onboarding</p>

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
                            {options.map(option => (
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
                    {options.map(option => (
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
