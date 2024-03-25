import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import ErrorPage from './Error';
import {Link} from 'react-router-dom'
import './admin.css'
export default function AdminUser() {

    const {token}=useAuth();
    const [isadmin, setIsadmin] = useState(true)
    const [users, setUsers] = useState([])
    const ShowUsers=async()=>{
        try {
            const responce=await fetch('http://localhost:5000/api/admin/users',{
                method:'GET',
                headers:{
                    'Authorization':`Bearer ${token}`
                },
              });

              const data=await responce.json();
              // console.log('userdata'+data.userdata[0]);
              if(data.message===false){
                setIsadmin(false)
              }else{
                setUsers(data.userdata);
              }
            } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
      ShowUsers();
    }, [])
   
    const deleteUSer = async (id) => {
      
      try {
        const responce=await fetch(`http://localhost:5000/api/admin/users/delete/${id}`,{
          method:'DELETE',
          headers:{
            'Authorization':`Bearer ${token}`
          },
        })
        if(responce.ok){
          ShowUsers();
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
    {isadmin ?
  <table className="table table-m table-dark custom-table p-1">
  <thead>
    <tr style={styleobject} className="p-3 text-center">
      <th scope="col">sr no.</th>
      <th scope="col">name</th>
      <th scope="col">Email</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {users.map((item, index) => {
      return (
        <tr key={index} style={styleobject} className="p-3 text-center">
          <th scope="row">{index + 1}</th>
          <td colspan="1" className="p-3">{item.username}</td>
          <td colspan="1" className="p-3">{item.email}</td>
          <td colspan="1" className="p-3">
            <button >
              <Link to={`/admin/users/${item._id}/edit`}> Edit</Link>
              
              </button>
          </td>
          <td colspan="1" className="p-3">
            <button onClick={()=>deleteUSer(item._id)} >Delete</button>
          </td>
        </tr>
      );
    })}
  </tbody>
</table>
  :
  <ErrorPage/>
}
</>)
}




      

    