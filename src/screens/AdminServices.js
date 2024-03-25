import React, { useEffect,useState } from 'react'
import { useAuth } from '../store/auth';
import {Link} from 'react-router-dom'
import ErrorPage from './Error';
export default function AdminServices() {
  
  const {token}=useAuth()
  const [isadmin, setIsadmin] = useState(true)
    const [services, setServices] = useState([])
  const showServices=async ()=>{
      try {
        const responce=await fetch('http://localhost:5000/api/admin/services',{
        method:'GET',
        headers:{
            'Authorization':`Bearer ${token}`
        },
        })

        const data=await responce.json();
              // console.log('userdata'+data.userdata[0]);
        if(data.message===false){
          setIsadmin(false)
        }else{
          setServices(data.serviceData);
        }
      } catch (error) {
          console.log(error);
      }
  }
  useEffect(() => {
    showServices();
  }, [])

  const deleteUSer=async (id)=>{
    try {
      const responce=await fetch(`http://localhost:5000/api/admin/services/delete/${id}`,{
        method:'DELETE',
        headers:{
          'Authorization':`Bearer ${token}`
        },
      })
      if(responce.ok){
        showServices();
      }
      
      } catch (error) {
        console.log(error);
    }
  }
  const styleobject={
    fontSize:"2rem",
    margin:"2rem"
  }
  const styleobject2={
    color:"white",
    backgroundColor:"#17cf97",
    display: "flex",
    justifyContent: "center", /* Horizontally center the content */
    alignItems: "flex-end", /* Align items at the start (top) */
    marginLeft:"45%",
    marginRight:"20%",
    width:"20rem"/* Set container height to full viewport height */
  }
  return(
    <>
    {isadmin ? <>
  <table className="table table-m table-dark custom-table p-1">
  <thead>
    <tr style={styleobject} className="p-3 text-center">
      <th scope="col">sr no.</th>
      <th scope="col">Service</th>
      <th scope="col">Description</th>
      <th scope="col">Price Range</th>
      <th scope="col">provider</th>

      <th scope="col">Image Link</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {services.map((item, index) => {
      return (
        <tr key={index} style={styleobject} className="p-3 text-center">
          <th scope="row">{index + 1}</th>
          <td colspan="1" className="p-3">{item.service}</td>
          <td colspan="1" className="p-3">{item.description}</td>
          <td colspan="1" className="p-3">{item.price}</td>
          <td colspan="1" className="p-3">{item.provider}</td>
          {/* <td colspan="1" className="p-3">{item.image}</td> */}
          <td colspan="1" className="p-3">
            <Link href={`${item.image}`} target="_blank">{item.image}</Link>
          </td>

          <td colspan="1" className="p-3">

            <button >
              <Link to={`/admin/services/${item._id}/edit`}> Update</Link>
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
    <div   className="addservice">
    <button style={styleobject2}>
    <Link to={`/admin/services/add`}>
      Add service +</Link></button>
    </div>
    </>
  :
  <ErrorPage/>
}
</>)
}
    