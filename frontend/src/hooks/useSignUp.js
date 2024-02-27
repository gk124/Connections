import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignUp = () => {
    const [loading, setLoading]= useState(false);
    const {setAuthUser}=useAuthContext();

    const signup=async({fullName,userName,password,confirmPassword,gender})=>{
        const success=handleInputErrors({fullName,userName,password,confirmPassword,gender})
        if(!success)
            return;

        setLoading(true);
        try {
            const res=await fetch("/api/auth/signup",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({fullName,userName,password,confirmPassword,gender})
            })

            const data=await res.json();
            if(data.error)
                throw new Error(data.error);

            // localStorage
            localStorage.setItem('auth-user',JSON.stringify(data));

            // context  
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
        } finally{
            setLoading(false);
        }
    };

    return {loading,signup};
};

export default useSignUp

const handleInputErrors=({fullName,userName,password,confirmPassword,gender})=>{
    if(!fullName || !userName || !password || !confirmPassword || !gender){
        toast.error('Please fill in all the details');
        return false;
    }

    if(password !== confirmPassword){
        toast.error('Password did not match');
        return false;
    }

    if(password.length < 6){
        toast.error('Password length should be atleast 6');
        return false;
    }

    return true;
}