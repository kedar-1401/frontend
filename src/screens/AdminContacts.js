import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import Login from './Login';
import ErrorPage from './Error';
import './admin.css'
export default function ADminContacts() {

    const {token}=useAuth();
    const [isadmin, setIsadmin] = useState(true)
    const [contacts, setContacts]= useState([])
    const ShowContacts=async()=>{
        try {
            const responce=await fetch('http://localhost:5000/api/admin/contacts',{
                method:'GET',
                headers:{
                    'Authorization':`Bearer ${token}`
                },
              });
              
              const data=await responce.json();
              // console.log('userdata'+data.contactdata[0]);
              if(data.message===false){
                setIsadmin(false)
              }else{
                setContacts(data.contactdata);
              }
            } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
      ShowContacts();
  
    }, [])
    const deleteContact=async(id)=>{
      try {
          const response=await fetch (`http://localhost:5000/api/admin/contacts/delete/${id}`,{
            method:'DELETE',
            headers:{
              'Authorization':`Bearer ${token}`
            }
          });
          if(response.ok){
            ShowContacts();
          }
      } catch (error) {
        console.log(error);
      }
    }
    const styleobject={
      fontSize:"2rem",
      margin:"2rem"
    }
  return (
    <>
    {isadmin ? (
     <table class="table table-m table-dark custom-table p-1">
     <thead>
       <tr style={styleobject} class=" text-center">
         <th scope="col">no.</th>
         <th scope="col">name</th>
         <th scope="col">Email</th>
         <th scope="col">Subject</th>
         <th scope="col">Message</th>

         <th scope="col">Delete</th>
       </tr>
     </thead>
     <tbody>
       {contacts.map((item, index) => {
         return (
           <tr key={index} style={styleobject} >
             <th scope="row">{index + 1}</th>
             <td colspan="1" class="p-3">{item.username}</td>
             <td colspan="1" class="p-3">{item.email}</td>
             <td colspan="1" class="p-3">{item.subject}</td>
             <td colspan="1" class="p-3">{item.message}</td>

             <td colspan="1" class="p-3">
               <button onClick={()=>deleteContact(item._id)} >Delete</button>
             </td>
           </tr>
         );
       })}
     </tbody>
   </table>
   
    ) : (
      <ErrorPage/>
    )}
    </>
  )
}
{/* <tr key={index}>
  <th scope="row">{index + 1}</th>
  <td colspan="1" class="fs-5">{item.username}</td>
  <td colspan="1" class="fs-5">{item.email}</td>
  <td colspan="1">
    <button class="btn btn-primary fs-5">Edit</button>
  </td>
  <td colspan="1">
    <button class="btn btn-danger fs-5">Delete</button>
  </td>
</tr> */}


      

    