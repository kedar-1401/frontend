import React from "react";
import {useState,useEffect} from 'react';
import Axios from 'axios';
import Mainheader from "./mainhead";
import RHeader from "./rightzone";
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
   <> 
   <Mainheader/>
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
 <RHeader/>
</>
  );
};

export default About;