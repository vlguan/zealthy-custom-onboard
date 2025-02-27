'use client'
import React, { useState} from 'react';
import axios from 'axios';
interface LoginPageProps {
    onNext: (userId:number) => void;
}

const apiUrl = process.env.NEXT_PUBLIC_APP_API_URL;

const LoginPage: React.FC<LoginPageProps> = ({ onNext }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errors, setErrors] = useState<{ [key:string]:string}>({});
    const validateForm = () => {
        const newErrors: { [key:string]: string} = {};
        if(!email){
            newErrors.email = 'Email is required'
            // alert(newErrors.email)
        }else if(!/\S+@\S+\.\S+/.test(email)){
            newErrors.email = 'Email is invalid'
            // alert(newErrors.email)
        }
        if (!password){
            newErrors.password = 'Password is required';
            // alert('Password is required')
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
                const response = await axios.post(`${apiUrl}/api/register`,formData)
                console.log('Form submitted:', { email, password, response });
                onNext(response.data.id);
            } catch (errors){
                console.log('Errors:', errors)
                alert('An error occurred while submitting the form. Please try again.');
            }

        }else{
            let errorMessage = 'Please fix the following errors:\n';
            if (errors.email) errorMessage += `- ${errors.email}\n`;
            if (errors.password) errorMessage += `- ${errors.password}\n`;
            alert(errorMessage.trim());
        }
    }




    return(
        <form onSubmit={handleSubmit}>
        <div>
            
            <p className='login-header'>Email</p>
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
                <p className='login-header'>Password</p>
            <input 
                    type="password" 
                    id="password" 
                    value={password} 
                    onChange={(e)=>setPassword((e.target.value))}
                />
            </div>
            <div className="button-container">
                <button className='login-button' type="submit">Register</button>
            </div>
        </form>
    )
};

export default LoginPage;