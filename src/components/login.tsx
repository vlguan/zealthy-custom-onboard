'use client'
import React, {useEffect, useState} from 'react';
import axios from 'axios';
interface LoginPageProps {
    onNext: (userId:number) => void;
}
const LoginPage: React.FC<LoginPageProps> = ({ onNext }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errors, setErrors] = useState<{ [key:string]:string}>({});
    const validateForm = () => {
        const newErrors: { [key:string]: string} = {};
        if(!email){
            newErrors.email = 'Email is required'
        }else if(!/\S+@\S+\.\S+/.test(email)){
            newErrors.email = 'Email is invalid'
        }
        if (!password){
            newErrors.password = 'Password is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length ===0;
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        if(validateForm()) {
            formData.append('email',email);
            formData.append('password',password);

            try{
                const response = await axios.post("http://127.0.0.1:5000/register",formData)
                console.log('Form submitted:', { email, password, response });
                onNext(response.data.id);
            } catch (errors){
                console.log('Errors:', errors)
            }

        }else{
            console.log('Form has errors');
        }
    }




    return(
        <form onSubmit={handleSubmit}>
        <div>
            <h1> Welcome To the User Onboarding Page</h1>
            <p>Email and Password</p>
        </div>
            <div>
                <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={(e)=>setEmail((e.target.value))}
                />
            </div>
            <div>
            <input 
                    type="password" 
                    id="password" 
                    value={password} 
                    onChange={(e)=>setPassword((e.target.value))}
                />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
};

export default LoginPage;