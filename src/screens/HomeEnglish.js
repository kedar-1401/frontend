import React from "react";
import {useState,useEffect} from 'react';
import Axios from 'axios';
import "./Login.css";
import imageRC from '../images/airhostess.jpg'
const About = () => {
  const counter = (id, start, end, duration) => {
    let obj = document.getElementById(id);
    let current = start;
    let range = end - start;
    let increment = end > start ? 1 : -1;
    let step = Math.abs(Math.floor(duration / range));
    let timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current === end) {
            clearInterval(timer);
        }
    }, step);
};
useEffect(() => {
    counter("count1", 0, 127, 3000);
    counter("count2", 0, 101, 2500);
    counter("count3", 0, 120, 3000);
    counter("count4", 8, 70, 3000);
}, []);

  return (
   <> <main>
   <section className="section-hero">
     <div className="container grid grid-two-cols">
       <div className="hero-content">
         <p> Managed by Human Services</p>
         <h1>Akash Career and Personality Development Academy</h1>
         <p>
         We provide all the course information from our seminars on teaching how to handle students from 1st to 4th, how to feed them, how to teach them what to feed them           </p>
         <div className="btn btn-group">
           <a href="/contact">
             <button className="btn">connect now</button>
           </a>
           <a href="/services">
             <button className="btn secondary-btn">learn more</button>
           </a>
         </div>
       </div>

       {/* hero images  */}
       {/* <div className="hero-image">
         <img
           src={home}
           alt="coding together"
           width="400"
           height="500"
         />
       </div> */}
     </div>
   </section>
 </main>

 {/* 2nd section  */}
 {/* <Analytics /> */}
 <section className="section-analytics">
                <div className="container text-center">
                    <div className="div1">
                    <h2>
                <span id="count1"></span>+
              </h2>
              <p>Companies</p>
                    </div>
                    <div className="div1">
                    <h2>
                <span id="count2"></span>+
              </h2>
              <p>Registered Students</p>
                    </div>
                    <div className="div1">
                    <h2>
                <span id="count3"></span>+
              </h2>
              <p>SAVINGS</p>
                    </div>
                    <div className="div1">
                    <h2>
                <span id="count4"></span>+
              </h2>
              <p>SAVINGS</p>
                    </div>
                </div>
            </section>
 {/* 3rd section  */}
 <section className="section-hero">
   <div className="container grid grid-two-cols">
     {/* hero images  */}
     <div className="hero-image">
       <img
         src=""
         alt="coding together"
         width="400"
         height="500"
       />
     </div>

     <div className="hero-content">
       <p>We are here to help you</p>
       <h1>Get Started Today</h1>
       <p>
         Ready to take the first step towards a more efficient and secure
         IT infrastructure? Contact us today for a free consultation and
         let's discuss how Thapa Technical can help your business thrive in
         the digital age.
       </p>
       <div className="btn btn-group">
         <a href="/contact">
           <button className="btn">connect now</button>
         </a>
         <a href="/services">
           <button className="btn secondary-btn">learn more</button>
         </a>
       </div>
     </div>
   </div>
 </section>
</>
  );
};

export default About;