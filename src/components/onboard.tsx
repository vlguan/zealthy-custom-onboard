'use client'
import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import axios from 'axios';
import LoginPage from './login';
import AboutPage from './about';
import AddressPage from './address';
const OnboardPage: React.FC = () => {
    interface PageConditions {
        about: boolean;
        address: boolean;
        birthdate: boolean;
    }
    const [PageConditions, setPageConditions] = useState<PageConditions>({
        about:false,
        address: false,
        birthdate: false
    });
    const [currentPage, setCurrentPage] = useState<'login' | 'about' | 'address' | 'birthdate'>('login');
    useEffect(() => {
        const checkFields = async () => {
            try{
                const response = await axios.get("http://127.0.0.1:5000/fields");
                // console.log(response)
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
    const getNextPage = (currentPage: string):string | null => {
        const pageOrder = ['about', 'address','birthdate']
        const currentIndex = pageOrder.indexOf(currentPage)
        for (let i = currentIndex + 1; i < pageOrder.length; i++){
            const nextPage = pageOrder[i]
            if (PageConditions[nextPage as keyof PageConditions]){
                return nextPage;
            };
        }
        return null; 
    }
    const handleNextPage = () => {
        const nextPage =getNextPage(currentPage)
        if(nextPage){
            setCurrentPage(nextPage as 'about' | 'address' | 'birthdate')
        }else{
            console.log('All pages Done')
            // handleCompletion();
        }

    };
    return( 
    <div>
        {currentPage === 'login' && (<LoginPage onNext={handleNextPage}/>)}
        {currentPage === 'about' && PageConditions.about && (<AboutPage onNext={handleNextPage}/>)}
        {currentPage === 'address' && PageConditions.address && (<AddressPage onNext={handleNextPage}/>)}
        {/* {currentPage === 'birthdate' && (<BirthdatePage/>)} */}

    </div>
    )
};
export default OnboardPage;