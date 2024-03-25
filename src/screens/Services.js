
import React, { useState, useEffect } from 'react';


import { useAuth } from '../store/auth';
import Login from './Login';
import './Section.css'
import TopLoading from '../components/TopLoading';
export default function Services() {
  const [articles, setArticles] = useState([]);

  const { isLoggedIn } = useAuth()
  const showServices = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/services', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        const { data } = await response.json();
        setArticles(data);
      }
    } catch (error) {
      console.log(`error from service frontend ${error}`);
    }
  };

  useEffect(() => {
    showServices();
  }, []);

  return (
    <>{!isLoggedIn ? <Login /> :
     
      <section className='section-services'>        
     <TopLoading/>
        <div className="container">
          <h1 className="main-heading">सेवा  </h1>
        </div>
        <div className="container grid grid-three-cols"> {
          articles.map((curElem, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-img">
                  <img src={!curElem.image?"https://miro.medium.com/v2/resize:fit:1200/1*WtPYwgtJUo5d4Muf2Cmklg.jpeg":curElem.image} className="card-img-top" alt="iamge" width="20"/>
                </div>
                <div className="card-details">
                  <div className="grid grid-two-cols">
                    <p>{curElem.provider}</p>
                    <p>{curElem.price}</p>
                  </div>
                  <h2>{curElem.service}</h2>
                  <p>{curElem.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    }
    </>
  );
}

