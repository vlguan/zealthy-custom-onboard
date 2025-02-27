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
        <div className='form-object'>
            <h1>About Section</h1>
            <textarea className='text-box'
                value={about}
                onChange={(e)=> setAboutMe(e.target.value)}
                required
                placeholder='Tell us about yourself'/>
        </div>
    )
};
export default AboutPage;