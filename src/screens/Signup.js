import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import './Login.css'
import { toast } from 'react-toastify';

export default function Signup() {

  const [credentials, setCredentials] = useState({
    username:"",
    email:"",
    password:"",
  });
  const navigate=useNavigate();
  const {storeTokenInLS}=useAuth();
  const handleSubmit = async(e)=>{
      e.preventDefault();
      try {
        const response=await fetch('http://localhost:5000/api/auth/signup',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(credentials)
        })

        if (response.ok) {
          const responseData = await response.json();
          setCredentials({ username: "", email: "", password: "" });
          // localStorage.setItem("token",responseData.token)
          storeTokenInLS(responseData.token);
          toast.success("Regestration successful")

          navigate('/')
        } else {
          const responseError = await response.json();
          toast.error(responseError.extraDetails ?responseError.extraDetails : responseError.message)
          //(responseError.extraDetails);
          if(responseError.message==="You have an account already you can Login instead "){
            navigate("/login")
          }
        }

      } catch (error) {
          console.log('reg',error);
      }
    }
  const handleInput = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="wrapper">
              
    <div className="container main">
      <div className="row">
          <div className="col-md-12 right">
              
              <div className="input-box">
                 
                 <header>Sign Up</header>
                 <div className="input-field">
                      <input type="text" className="input" id="username"  onChange={handleInput} value={credentials.username} name="username" />
                      <label htmlFor="email">Username</label> 
                  </div> 
                 <div className="input-field">
                      <input type="text" className="input" id="email" autoComplete="off"  onChange={handleInput} value={credentials.email} name="email"/>
                      <label htmlFor="email">Email</label> 
                  </div> 
                 <div className="input-field">
                      <input type="password" className="input" id="pass"  value={credentials.password} onChange={handleInput} name='password'/>
                      <label htmlFor="pass">Password</label>
                  </div> 
                 <div className="input-field">
                      
                 <button onClick={handleSubmit}>Sign Up</button>                   
                 </div> 

              </div>  
          </div>
      </div>
  </div>
  </div>
  );
}

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWJiYWI2YmJiNWEwNzQ0MjU5NmM0MTEiLCJlbWFpbCI6ImMiLCJpYXQiOjE3MDY3OTc5MzJ9.zQu5VtNE33VFuqvHgbQEXDDSkr-oIfaxflgKVUrtjgU
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWJiYWI2YmJiNWEwNzQ0MjU5NmM0MTEiLCJlbWFpbCI6ImMiLCJpYXQiOjE3MDY3OTc5NzB9.URQPl08a4qZ8KIaeLfuqlXkmxup3zL2u9AYsde674Hw