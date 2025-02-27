'use client'
import React, {useEffect, useState} from 'react';

import axios from 'axios';
import LoginPage from '../components/login';
import AboutPage from '../components/about';
import AddressPage from '../components/address';
import BirthdatePage from '../components/birthdate';
import '../styles/onboard.css';
import Wizard from '../components/wizard';

const apiUrl = process.env.NEXT_PUBLIC_APP_API_URL;
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
const initUserData: UserData ={
    id:0
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
    useEffect(() => {
        const checkFields = async () => {
            try{
                const response = await axios.get(`${apiUrl}/api/fields`);
                /*
                fields = {
                    about: bool,
                    address: bool,
                    birthdate: bool
                }
                */
                const fields = response.data
                setPageConditions(fields);
            } catch (error){
                console.error("error fetching fields:", error);
            }
        };
        checkFields();
    }, [])
    const validateData = (): boolean => {
        if (currentPage === 'page2') {
            // Validate fields for page2
            const { about, address, birthdate } = userData.fields || {};
            return (
                about?.trim() !== '' &&
                address?.street?.trim() !== '' &&
                address?.city?.trim() !== '' &&
                address?.state?.trim() !== '' &&
                address?.zip?.trim() !== '' &&
                birthdate?.trim() !== '' &&
                ((about !== undefined && PageConditions.page2.indexOf("about") > -1) ||
                (address !== undefined && PageConditions.page2.indexOf("address") > -1)||
                (birthdate !== undefined && PageConditions.page2.indexOf("birthdate") > -1))
            );
        } else if (currentPage === 'page3') {
            const { address, about, birthdate } = userData.fields || {};
            return (
                about?.trim() !== '' &&
                address?.street?.trim() !== '' &&
                address?.city?.trim() !== '' &&
                address?.state?.trim() !== '' &&
                address?.zip?.trim() !== '' &&
                birthdate?.trim() !== '' &&
                ((about !== undefined && 'about' == PageConditions.page3.toString()) ||
                (address !== undefined && 'address' == PageConditions.page3.toString())||
                (birthdate !== undefined && 'birthdate' == PageConditions.page3.toString()))

            );
        }
        
        return true;
    }
    const handleNextPage = (data: Partial<UserData>) => {
        setUserData((prev) => ({ ...prev, ...data }));
        console.log(userData)
        if (currentPage === 'login') {
            setCurrentPage('page2');
        } else if (currentPage === 'page2') {
            if (!validateData()){
                alert("Fields can't be empty")
                return;
            }else{

            }
            setCurrentPage('page3');

        } else if (currentPage === 'page3') {
            if (!validateData()){
                alert("Fields can't be empty")
                return;
            }
            submitUserData();
            alert("You registered successfully!\nRegister another account?")
            setCurrentPage('login')
        }
    };
    const submitUserData = async () => {
        try {
            const response = await axios.post(`${apiUrl}/api/info`, userData);
            console.log('User registered successfully:', response.data);
            setUserData(initUserData)
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return( 
    <div  className="onboard-container" suppressHydrationWarning>
        {currentPage =='login' && <h1 className="start-header"> Welcome To the User Onboarding Page</h1>}
        {currentPage === 'login' && (<LoginPage onNext={(id) => handleNextPage({ id })}/>)}
        {currentPage === 'page2' && (
                <div className="form-section">
                    {/* <div className='item1'> */}
                    {PageConditions.page2.includes('about') && (
                        <AboutPage
                            onDataChange={(about) => setUserData((prev) => ({
                                ...prev,
                                fields: { ...prev.fields, about }
                            }))}
                        />
                    )}
                    {/* </div> */}
                    {/* <div className='item2'> */}
                    {PageConditions.page2.includes('address') && (
                        <AddressPage
                            onDataChange={(address) => setUserData((prev) => ({
                                ...prev,
                                fields: { ...prev.fields, address }
                            }))}
                        />
                    )}
                    {/* </div> */}
                    {/* <div> */}
                    {PageConditions.page2.includes('birthdate') && (
                        <BirthdatePage
                            onDataChange={(birthdate) => setUserData((prev) => ({
                                ...prev,
                                fields: { ...prev.fields, birthdate }
                            }))}
                        />
                    )}
                    {/* </div> */}
                    <div className='button-container2'>
                        <button className='button1' onClick={() => setCurrentPage('login')}>Previous</button>

                        <button className='button2' onClick={() => handleNextPage({})}>Next</button>
                    </div>
                    
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
            <div className='button-container2'>
                <button className='button1' onClick={() => setCurrentPage('page2')}>Previous</button>
                <button className='button2' onClick={() => handleNextPage({})}>Submit</button>
            </div>
            
        </div>
    )}    
        <Wizard currentPage={currentPage} />
</div>
)};
export default OnboardPage;