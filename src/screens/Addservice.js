import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useAuth } from "../store/auth";
export default function Addservice() {

    const [credentials,setCredentials]=useState({service:"",description:"",price:"",provider:"",image:""})

      const navigate=useNavigate();
      const {token}=useAuth();
      const handleSubmit = async(e)=>{
          e.preventDefault();
          try {
            const response=await fetch('http://localhost:5000/api/admin/services/add',{
              method:'POST',
              headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`
              },
              body:JSON.stringify(credentials)
            })
    
            if (response.ok) {
              const responseData = await response.json();
              setCredentials({service:"",description:"",price:"",provider:"",image:""});
              // localStorage.setItem("token",responseData.token
              toast.success("Service Added successful")
    
              navigate('/admin/services')
            } else {
              const responseError = await response.json();
              toast.error(responseError.extraDetails ?responseError.extraDetails : responseError.message)
              //(responseError.extraDetails);
              if(responseError.message==="Image Already Exist ,Add Different Image For better experience"){
                navigate("/admin/services/add")
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
        <h1>Add Service</h1>
          <div className="col-md-12 right">
              <div className="input-box">
                 <div className="input-field">
                      <input type="text" className="input" id="service"  onChange={handleInput} value={credentials.service} name="service" />
                      <label htmlFor="email">Service Name</label> 
                  </div> 
                  <div className="input-field">
                      <input type="text" className="input" id="description"  onChange={handleInput} value={credentials.description} name="description" />
                      <label htmlFor="email">Service Description</label> 
                  </div> 
                  <div className="input-field">
                      <input type="text" className="input" id="price"  onChange={handleInput} value={credentials.price} name="price" />
                      <label htmlFor="email">Service Price</label> 
                  </div> 
                 <div className="input-field">
                      <input type="text" className="input" id="provider"  onChange={handleInput} value={credentials.provider} name="provider"/>
                      <label htmlFor="email">Service Provider</label> 
                  </div> 
                  <div className="input-field">
                      <input type="text" className="input" id="image"  onChange={handleInput} value={credentials.image} name="image"/>
                      <label htmlFor="email">Service Image Link</label> 
                  </div> 
                 <div className="input-field">
                 <button onClick={handleSubmit}>Add Service</button>                   
                 </div> 
              </div>  
          </div>
      </div>
  </div>
  </div>
  )
}
