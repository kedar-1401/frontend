// /* eslint-disable react/jsx-no-undef */

// import React from 'react'
// import { NavLink } from "react-router-dom";
// import { useAuth } from '../store/store';
// // import Logo from '../images/logo-white.png'
// import './Navbar.css'
// export default function Navbar(props) {

//   let { isLoggedIn } = useAuth();

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light custom-teal-background">
//         <div className="container-fluid">
//             {/* <NavLink class="navbar-brand" to="#">
//               <img src={Logo} alt="" width="200" height="40"/>
//             </NavLink> */}

//           <NavLink  className="navbar-brand fw-bold active custom-title-color" to="/">ACA</NavLink>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <NavLink className="nav-link fw-bold  active custom-home-color" aria-current="page" to="/">Home</NavLink>
//             </li>
//               {isLoggedIn ?
//                 <li className="nav-item">
//                   <NavLink  className="nav-link fs-5 active" aria-current="page" to="/myorder" >My Health</NavLink>  {/* index.css - nav-link color white */}
//                 </li> : ""}
//             </ul>
//           </div>
//           <div>
//             {(!isLoggedIn) ?
//               <form className="d-flex">
//                 <NavLink  className="nav-link fw-bold  active custom-home-color " to="/login">Login</NavLink>
//                 <NavLink  className="nav-link fw-bold  active custom-home-color" to="/signup">Signup</NavLink>
//               </form> :
//               <form>
//                 <NavLink  className="nav-link fw-bold fs-5 active custom-home-color " to="/logout">Logout</NavLink>
//               </form>}
//           </div>
//         </div>
//       </nav>
//     </div>
//   )


// }

import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from '../store/auth';
import './Navbar.css';

export default function Navbar(props) {

  const { isLoggedIn, user } = useAuth();


  // const isLoggedIn=!!token
  // console.log(isLoggedIn);
  return (
<>
<nav class="navbar navbar-expand-lg navigation-wrap">
  <div class="container">
    <a class="nav-link" href="/">ACA</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-stream navbar-toggler-icon"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/services">services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact Us</a>
        </li>
        {user.isAdmin ? <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/admin">
            Admin
          </NavLink>
        </li> : ""}
        <li>
        {isLoggedIn ? (
        <form className="d-flex">
          <NavLink className="nav-btn fw-bold   custom-home-color " to="/logout">
            Logout
          </NavLink>
        </form>
      ) : (
        <form className="d-flex">
          <NavLink className="nav-btn fw-bold   custom-button-color" to="/login">
            Login
          </NavLink> 
          
          <NavLink className="nav-btn fw-bold  custom-button-color" to="/signup">
            Signup
          </NavLink>

        </form>
      )}
          </li>
      </ul>
    </div>
  </div>
</nav>
  </>
  );
}

    // </>

// <div>

// <nav className="navbar navbar-expand-lg navbar-light custom-teal-background">
//   <div className="container-fluid">
//     <NavLink className="navbar-brand fw-bold active custom-title-color" to="/">
//       ACA
//     </NavLink>
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#navbarSupportedContent"
//       aria-controls="navbarSupportedContent"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse custom-link-place" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <NavLink className="nav-link fw-bold mr-5 ml-5 active custom-home-color" aria-current="page" to="/">
//             मुख्यपृष्ठ
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link fw-bold mr-5 ml-5 active custom-home-color" aria-current="page" to="/about">
//             उद्दिष्ट
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link fw-bold mr-5 ml-5 active custom-home-color" aria-current="page" to="/services">
//             सेवा
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link fw-bold mr-5 ml-5 active custom-home-color" aria-current="page" to="/contact">
//             संपर्क
//           </NavLink>
//         </li>
//         {user.isAdmin ? <li className="nav-item">
//           <NavLink className="nav-link fw-bold mr-5 ml-5 active custom-home-color" aria-current="page" to="/admin">
//             प्रशासक
//           </NavLink>
//         </li> : ""}
//       </ul>
//       {isLoggedIn ? (
//         <form className="d-flex">
//           <NavLink className="nav-link fw-bold  active custom-home-color " to="/logout">
//             Logout
//           </NavLink>
//         </form>
//       ) : (
//         <form className="d-flex">
//           <NavLink className="nav-link fw-bold  active custom-button-color" to="/login">
//             लॉग इन
//           </NavLink>
//           <NavLink className="nav-link fw-bold  active custom-button-color" to="/signup">
//             साइनअप
//           </NavLink>
//         </form>
//       )}
//     </div>
//   </div>
// </nav>
// </div>

// <nav class="navbar navbar-expand-lg navigation-wrap">
//   <div class="container">
//     <a class="navbar-brand" href="/">ACA</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
//       aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
//       <i class="fas fa-stream navbar-toggler-icon"></i>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarText">
//       <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="/">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#about">About Us</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#explore-food">services</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#testimonial">Reviews</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#faq">FAQ</a>
//         </li>
//         <li>
//           <button class="main-btn">1200 345 123</button>
//           </li>
//       </ul>
//     </div>
//   </div>
// </nav>