import React, { useEffect ,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../store/auth';
import {toast} from 'react-toastify'
export default function AdminUpdate() {

    const [credentials,setCredentials]=useState({username:"",email:""})
    const {token}=useAuth();
    const navigate=useNavigate();
    const params=useParams();
    const edituser=async ()=>{
        try {
            const responce=await fetch(`http://localhost:5000/api/admin/users/${params.id}`,{
            method:'GET',
            headers:{
              'Authorization':`Bearer ${token}`
            },
            })
  
            const data=await responce.json();
            // console.log(data);
            setCredentials({
            username: data.username,
            email: data.email,
              
            });
            
        } catch (error) {
            console.log(error);
        }
      }
      useEffect(() => {
    
        edituser();
      },[]);
      
    const handleSubmit=async(e)=>{
      e.preventDefault();
      try {
        const responce=await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`,{
          method:'PATCH',
          headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
          },
          body:JSON.stringify(credentials)
          })

          if(responce.ok){
            toast.success("updated Successfully")
            navigate('/admin/users')
          }
      } catch (error) {
        console.log(error);
      }
    }
    const  handleInput= (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

  return (
    <div className="wrapper">
              
    <div className="container main">
      <div className="row">
        <h1>Update User</h1>
          <div className="col-md-12 right">
              
              <div className="input-box">
                 
                 <div className="input-field">
                      <input type="text" className="input" id="username"  onChange={handleInput} value={credentials.username} name="username" />
                      <label htmlFor="email">Username</label> 
                  </div> 
                 <div className="input-field">
                      <input type="text" className="input" id="email"  onChange={handleInput} value={credentials.email} name="email"/>
                      <label htmlFor="email">Email</label> 
                  </div> 
                 <div className="input-field">
                 <button onClick={handleSubmit}>update</button>                   
                 </div> 
              </div>  
          </div>
      </div>
  </div>
  </div>
  )
}
