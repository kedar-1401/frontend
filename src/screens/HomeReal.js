// import home from '../images/home.png'
import React from 'react'
import './Login.css'
import { useEffect } from 'react';
import TopLoading from '../components/TopLoading'
import imageSrc from '../images/design.png'; // Import the image
export default function Home() {
  // const ref = useRef(null)
  // const isLoggedIn=useAuth();
  // localStorage.clear();
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
      <main>
        <TopLoading />

     
      <section id="about">
      <div class="about-wrapper container">
        <div class="about-img">
          <img src={imageSrc} alt="Food"/>
        </div>
        <div class="about-text">
        <p> मानव सेवा संस्था संचलित</p>
          <h1>आकाश करियर पर्सनॅलिटी डेव्हलपमेंट अकॅडमी</h1>
          <p>
          पहिली ते चौथीच्या विद्यार्थ्यांना कसे हाताळावे हे शिकवणे
                    त्यांना आहार कसा द्यावा कोणता द्यावा त्यांना कसे शिकवावे
                    त्या विद्यार्थ्यांसंदर्भात सर्व कर्स माहिती आम्ही आमच्या
                    सेमिनार मधून देतो
          </p>
        </div>
       
      </div>

    </section>
   
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
        
      </main>

      <section className="section-hero">
        <div className="container grid grid-two-cols">
          
          <div className="hero-image">
            <img src="" alt="coding together" width="400" height="500" />
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
}
