import React ,{useState,useEffect} from 'react'
import { useAuth } from '../store/auth';
import { useNavigate, useParams } from 'react-router-dom'
import {toast} from 'react-toastify'
export default function AdminServUpdate() {
  const [credentials,setCredentials]=useState({service:"",description:"",price:"",provider:"",image:""})
    const {token}=useAuth();
    const navigate=useNavigate();
    const params=useParams();
    const editService=async ()=>{
      try {
          

          const responce=await fetch(`http://localhost:5000/api/admin/services/${params.id}`,{
          method:'GET',
          headers:{
            'Authorization':`Bearer ${token}`
          },
          })

          const data=await responce.json();
          console.log(data);
          setCredentials({
            service:data.service,
            description:data.description,
            price:data.price,
            provider:data.provider,
            image:data.image
          });
          
      } catch (error) {
          console.log(error);
      }
    }
    useEffect(() => {
  
      editService();
    },[]);
    const handleSubmit=async(e)=>{
      e.preventDefault();
      try {
        const responce=await fetch(`http://localhost:5000/api/admin/services/update/${params.id}`,{
          method:'PATCH',
          headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
          },
          body:JSON.stringify(credentials)
          })

          if(responce.ok){
            toast.success("updated Successfully")
            navigate('/admin/services')
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
        <h1>Update Service</h1>
          <div className="col-md-12 right">
              <div className="input-box">
                 <div className="input-field">
                      <input type="text" className="input" id="service"  onChange={handleInput} value={credentials.service} name="service" />
                      <label htmlFor="email">Service</label> 
                  </div> 
                  <div className="input-field">
                      <input type="text" className="input" id="description"  onChange={handleInput} value={credentials.description} name="description" />
                      <label htmlFor="email">Description</label> 
                  </div> 
                  <div className="input-field">
                      <input type="text" className="input" id="price"  onChange={handleInput} value={credentials.price} name="price" />
                      <label htmlFor="email">Price</label> 
                  </div> 
                 <div className="input-field">
                      <input type="text" className="input" id="provider"  onChange={handleInput} value={credentials.provider} name="provider"/>
                      <label htmlFor="email">Provider</label> 
                  </div> 
                  <div className="input-field">
                      <input type="text" className="input" id="image"  onChange={handleInput} value={credentials.image} name="image"/>
                      <label htmlFor="email">Image Link</label> 
                  </div> 
                 <div className="input-field">
                 <button onClick={handleSubmit}>Update</button>                   
                 </div> 
              </div>  
          </div>
      </div>
  </div>
  </div>
  )
}
