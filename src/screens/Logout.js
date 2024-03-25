import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify';


export const Logout=() =>{

    const {Logoutuser} =useAuth();

    localStorage.clear();
    useEffect(() => {
      

      console.log("We are in logged out page");
      Logoutuser();
    }, [])
    
    toast.success("Logged Out");
     return <Navigate to='/login'/>
}
