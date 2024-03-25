import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { MdOutlineMiscellaneousServices,MdOutlineImportContacts } from "react-icons/md";
import '../Navbar.css'
import { useAuth } from '../../store/auth';
import ErrorPage from '../../screens/Error';
export default function AdminLayout() {

  const {user}=useAuth();
  const styleobj={
    color:"#17cf97"
  }
  return (
    <>
     {user.isAdmin ? (<>
     <div className="admin-nav">
     <nav className="navbar navbar-expand-lg navbar-light " style={styleobj}>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav mr-auto">
         <li className="nav-item active mx-5 ">
           <NavLink className="fs-1" style={styleobj} to={"/admin/users"}><FaUser />users</NavLink>
         </li>
         
         <li className="nav-item mx-5">
           <NavLink className="fs-1" style={styleobj} to={"/admin/contacts"}><MdOutlineImportContacts />Contacts</NavLink>
         </li>
         
         <li className="nav-item mx-5">
           <NavLink className="fs-1" style={styleobj} to={"/admin/services"}><MdOutlineMiscellaneousServices />Services</NavLink>
         </li>
       </ul>
       <form className="form-inline my-2 my-lg-0 fs-1">
         <input className="form-control mr-sm-2 h-1 fs-1"  style={styleobj} type="search" placeholder="Search" aria-label="Search"/>
         <button className="btn btn-outline-success my-2 my-sm-0 fs-1" type="submit">Search</button>
       </form>
     </div>
     </nav>
     
       <Outlet/>
     </div>
      </>
    ) : (
      <ErrorPage/>
    )}
    </>
  )


}



