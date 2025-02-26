'use client'
import React, {useEffect, useState} from 'react';

import axios from 'axios';
import LoginPage from '../components/login';
import AboutPage from '../components/about';
import AddressPage from '../components/address';
import BirthdatePage from '../components/birthdate';
import '../styles/onboard.css';
import Wizard from '../components/wizard';
interface UserData {
        id:number,
        fields?:{
            about?: string,
            address?: {
                street: string,
                city: string,
                state: string,
                zip: string

            },
            birthdate?: string;
        }
        

}
interface PageConditions {
        page2:[string,string],
        page3:[string]
    }
const OnboardPage: React.FC = () => {
    
    const [PageConditions, setPageConditions] = useState<PageConditions>({
        page2:['about', 'birthdate'],
        page3:['address']
    });
    const [currentPage, setCurrentPage] = useState<'login' | 'page2' | 'page3'>('login');
    const [userData, setUserData] = useState<UserData>({id:0, });
    const [successPage, setSuccess] = useState<boolean>(false)
    useEffect(() => {
        const checkFields = async () => {
            try{
                const response = await axios.get("http://127.0.0.1:5000/fields");
                /*
                fields = {
                    about: bool,
                    address: bool,
                    birthdate: bool
                }
                */
                let fields = response.data
                setPageConditions(fields);
            } catch (error){
                console.error("error fetching fields:", error);
            }
        };
        checkFields();
    }, [])
    const handleNextPage = (data: Partial<UserData>) => {
        setUserData((prev) => ({ ...prev, ...data }));
        console.log(userData)
        if (currentPage === 'login') {
            setSuccess(false)
            setCurrentPage('page2');
        } else if (currentPage === 'page2') {
            setCurrentPage('page3');
        } else if (currentPage === 'page3') {
            submitUserData();
            alert("You registered successfully!\nRegister another account?")
            setCurrentPage('login')
        }
    };
    const submitUserData = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/info', userData);
            console.log('User registered successfully:', response.data);
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return( 
    <div className="onboard-container">
        
        {currentPage === 'login' && (<LoginPage onNext={(id) => handleNextPage({ id })}/>)}
        {currentPage === 'page2' && (
                <div className="form-section">
                    {PageConditions.page2.includes('about') && (
                        <AboutPage
                            onDataChange={(about) => setUserData((prev) => ({
                                ...prev,
                                fields: { ...prev.fields, about }
                            }))}
                        />
                    )}
                    {PageConditions.page2.includes('address') && (
                        <AddressPage
                            onDataChange={(address) => setUserData((prev) => ({
                                ...prev,
                                fields: { ...prev.fields, address }
                            }))}
                        />
                    )}
                    {PageConditions.page2.includes('birthdate') && (
                        <BirthdatePage
                            onDataChange={(birthdate) => setUserData((prev) => ({
                                ...prev,
                                fields: { ...prev.fields, birthdate }
                            }))}
                        />
                    )}
                    <button className='button' onClick={() => handleNextPage({})}>Next</button>
                </div>
            )}
        {currentPage === 'page3'  && (<div className="form-section">
            {PageConditions.page3.includes('about') && (
                <AboutPage
                onDataChange={(about) => setUserData((prev) => ({
                    ...prev,
                    fields: { ...prev.fields, about }
                }))}
                />
            )}
            {PageConditions.page3.includes('address') && (
                <AddressPage
                onDataChange={(address) => setUserData((prev) => ({
                    ...prev,
                    fields: { ...prev.fields, address }
                }))}
                />
            )}
            {PageConditions.page3.includes('birthdate') && (
                <BirthdatePage
                onDataChange={(birthdate) => setUserData((prev) => ({
                    ...prev,
                    fields: { ...prev.fields, birthdate }
                }))}
                />
            )}
            <button className='button' onClick={() => handleNextPage({})}>Submit</button>
            
        </div>
    )}    
    <Wizard currentPage={currentPage} />
</div>
)};
export default OnboardPage;