import React from 'react';
import { useAuth } from '../store/auth';
import './Login.css';
import Footer from '../components/footer';
import styles from './about.module.css';
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'
import { NavLink } from 'react-router-dom';
import TopLoading from '../components/TopLoading';

export default function About() {
  const { user } = useAuth();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className='aboutContainer'>
      <div className={styles.main}>
        <div className={styles.left}>
          <TopLoading />
          <div className="head2">
            <h2>Hello {user.username}, Welcome to Akash Career and Personality Development Academy</h2>
            <h1 className={styles.header} >Our Objective</h1>
          </div>
          <div className="awards">
            <div className="award1">
              <p>
                <i className="fa-sharp fa-solid fa-arrow-right fa-beat fa-lg mx-3" ></i>
                <div className={styles.part}> We teach students from the first to the fourth standard how to take care of themselves, what food to give them, what to give them, how to teach them through our seminars with reference to all courses.</div>
              </p>
            </div>
            {/* Other awards */}
            <div data-aos="fade-up">
            <div className="award1">
              <p> <i className="fa-sharp fa-solid fa-arrow-right fa-beat fa-lg mx-3"  > </i>
              <div className={styles.part}>Third step We have developed a special seminar for students of tenth and twelfth grade after the tenth and twelfth grade about what to do after tenth and twelfth grade, which direction to suggest their career.       </div>                  </p>  
            </div>
            </div>
            <div data-aos="fade-left">
            <div className="award1">
              <p> <i className="fa-sharp fa-solid fa-arrow-right fa-beat fa-lg mx-3"  > </i>
              <div className={styles.part}>Fourth step After graduation, how to develop personality development, mental development, self-development, business development and career in hundreds of directions. We provide them with all course knowledge through that seminar.                         </div>
              </p></div>
            </div>
            <div data-aos="fade-right">
            <div className="award1">
              <p> <i className="fa-sharp fa-solid fa-arrow-right fa-beat fa-lg mx-3"  > </i>
              <div className={styles.part}>Fifth step In this we give very suitable and important information about business to those who are failing in tenth, failing in twelfth, half-graduates, to unemployed people, so that they can be self-reliant financially. We have developed a special course for this and through our academy we reach all those schools or cities or institutes and provide them with that seminar.</div>
            </p>
            </div> 
            </div>
           
          </div>
          <div className="buttonContainer">
            <form className="">
              <button className='custom-connect-color '>
                <NavLink className="nav-link fw-bold  " to="/contact" style={{ color: 'white' }}>
                  Connect Now
                </NavLink>
              </button>
              <button className='ml-5' style={{ backgroundColor: 'transparent', border: '2px solid #17cf97' }}>
                <NavLink className="nav-link fw-bold active" to="/services" style={{ color: 'white' }}>
                  Learn More
                </NavLink>
              </button>
            </form>
          </div>
        </div>
        <div className={styles.right}>
          <iframe
            width="480"
            height="315"
            src="https://www.youtube.com/embed/OesZJNm3thw"
            title="YouTube video player"
            frameBorder="3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
