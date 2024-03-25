import './App.css'

import Home from "./screens/HomeEnglish"
import Login from "./screens/Login"
import Signup from "./screens/Signup"
import Error from "./screens/Error"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Logout} from './screens/Logout'

import About from './screens/AboutEnglish'
import Services from './screens/Services'
import Contact from './screens/ContactEnglish'
import Navbar from './components/Navbar'
import AdminLayout from './components/layouts/AdminLayout'
import AdminUser from './screens/AdminUser'
import AdminContacts from './screens/AdminContacts'
import AdminServices from './screens/AdminServices'
import AdminUpdate from './screens/AdminUpdate'
import AdminServUpdate from './screens/AdminServUpdate'
import Addservice from './screens/Addservice'
import Blank from './screens/Blank'

function App() {


  return (
    <div className="App">
   
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/*" element={<Error/>}/> 
          <Route path="/contact" element={<Contact/>}/> 
          <Route path="/about" element={<About/>}/> 
          <Route path="/services" element={<Services/>}/> 
          <Route path="/logout" element={<Logout/>}/> 
          <Route path='/admin' element={<AdminLayout/>}>
            <Route  path='users' element={<AdminUser/>}/>
            <Route  path='contacts' element={<AdminContacts/>}/>
            <Route  path='services' element={<AdminServices/>}/>
            <Route  path='services/add' element={<Addservice/>}/>
            <Route  path='users/:id/edit' element={<AdminUpdate/>}/>
            <Route  path='services/:id/edit' element={<AdminServUpdate/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;