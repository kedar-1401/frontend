import React from 'react'
import { useAuth } from '../store/auth'
import './Login.css'
import {  NavLink } from 'react-router-dom';
import TopLoading from '../components/TopLoading';

export default function About() {

  const { user } = useAuth();
 
  // console.log(user);
  return (
    <div className='aboutContainer'>
        <TopLoading/>
         <div className="head2">
         <h2>Hello {user.username}, Welcome to Akash Career and Personality Development Academy</h2>
              <h3 id="heading">Our Objective</h3>
          </div>
          <div className="awards">
            <div className="award1">
              <p> <i className="fa-sharp fa-solid fa-arrow-right fa-beat fa-lg mx-3"  > </i>
              We teach students from the first to the fourth standard how to take care of themselves, what food to give them, what to give them, how to teach them through our seminars with reference to all courses.
                </p>
            </div>
            <div className="award1">
              <p> <i className="fa-sharp fa-solid fa-arrow-right fa-beat fa-lg mx-3"  > </i>
              Second step We have developed a special course for fifth to ninth grade students through which they can study how to practice, how much to do, how to do it, how to exercise, sleep, how to increase mental strength. We also counsel all these students on all subjects beforehand.                         </p>
            </div>
            <div className="award1">
              <p> <i className="fa-sharp fa-solid fa-arrow-right fa-beat fa-lg mx-3"  > </i>
              Third step We have developed a special seminar for students of tenth and twelfth grade after the tenth and twelfth grade about what to do after tenth and twelfth grade, which direction to suggest their career.                         </p>  
            </div>
            <div className="award1">
              <p> <i className="fa-sharp fa-solid fa-arrow-right fa-beat fa-lg mx-3"  > </i>
              Fourth step After graduation, how to develop personality development, mental development, self-development, business development and career in hundreds of directions. We provide them with all course knowledge through that seminar.                         </p>
              </div>
            <div className="award1">
              <p> <i className="fa-sharp fa-solid fa-arrow-right fa-beat fa-lg mx-3"  > </i>
              Fifth step In this we give very suitable and important information about business to those who are failing in tenth, failing in twelfth, half-graduates, to unemployed people, so that they can be self-reliant financially. We have developed a special course for this and through our academy we reach all those schools or cities or institutes and provide them with that seminar.
            </p>
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
  )
}
