import React, {useEffect, useState} from 'react';
// import axios from 'axios';
interface AboutPageProps {
    onDataChange: (about:string) => void;
}
const AboutPage: React.FC<AboutPageProps> = ({onDataChange}) => {
    const [about, setAboutMe] =useState<string>('')
    useEffect(()=>{
        if(about){
            onDataChange(about);
        }
        
    },[about])
    return(
        <div>
            <h1>about test</h1>
            <textarea 
                value={about}
                onChange={(e)=> setAboutMe(e.target.value)}
                placeholder='Tell us about yourself'/>
        </div>
    )
};
export default AboutPage;