import React from "react";
import styles from './mainhead.module.css'
import "./Login.css";
import ReactTyped from 'react-typed'

const Mainheader = () => {
  return (
   <div class="container">
    <div className={styles.main}>
      <div className={styles.left}>
      <main>
   <section className="section-hero">
     <div className="container grid grid-two-cols">
       <div className="hero-content">
        <h1>Akash Career & Personality Development Academy</h1>
        <br></br>
         <div className={styles.type}>
         <ReactTyped strings={
            ["EDUCATION",
            "INNOVATION",
            "PERSONALITY",
            "CAREER HUB"
        ]}
        typeSpeed={150}
        backSpeed={100}
        loop
        >
         </ReactTyped>
         </div>
       
         <p>
         We provide all the course information from our seminars on teaching how to handle students from 1st to 4th, how to feed them, how to teach them what to feed them </p>
         <div className="btn btn-group">
           <a href="/contact">
             <button className="btn secondary-btn ">connect now</button>
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
      </div>
      <div className={styles.right}>
      </div>
   </div>
   </div>
  );
}

export default Mainheader;

      
     