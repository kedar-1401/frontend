import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../store/auth";
import './Login.css'
import { toast } from 'react-toastify';

export default function Login() {

  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const navigate=useNavigate();
  const {storeTokenInLS}=useAuth();

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    
    try {
      const response=await fetch('http://localhost:5000/api/auth/login',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(credentials)
  
        })

        if (response.ok) {
          // localStorage.clear();
          const responseData = await response.json();
          // console.log(responseData.token);
          storeTokenInLS(responseData.token);
          // localStorage.setItem("token",responseData.token)
          setCredentials({  email: "", password: "" });
          toast.success("Login successful")
          navigate('/')
        } else {
          const responseError = await response.json();
          
            toast.error(responseError.message==="Invalid Email" ? responseError.message : "Password is incorrect");
         
        }
    } catch (error) {
        console.log(error);
    }
    
  }

  const  handleInput= (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
   
    <>
    <div className="wrapper">
      <div className="container main">
        <div className="row">
            <div className="col-md-12 right">
                
                <div className="input-box">
                   
                   <header>Log In</header>
                   <div className="input-field">
                        <input type="text" className="input" id="email" onChange={handleInput} name='email' value={credentials.email}/>
                        <label htmlFor="email">Email</label> 
                    </div> 
                   <div className="input-field">
                        <input type="password" className="input" id="pass" onChange={handleInput} value={credentials.password} name='password'/>
                        <label htmlFor="pass">Password</label>
                    </div> 
                   <div className="input-field">
                        
                   <button onClick={handleSubmit}>Login</button>                   
                   </div> 

                </div>  
            </div>
        </div>
    </div>
    </div>
   
    </>
  )
}


// , 'Accept': 'application/json',
//         'Access-Control-Allow-Origin': 'http://localhost:3000/login', 'Access-Control-Allow-Credentials': 'true',
//         "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS'u