import React from 'react'
import { useAuth } from '../store/auth'
import './Login.css'
import {  NavLink } from 'react-router-dom';
import TopLoading from '../components/TopLoading';
export default function About() {


  const {user} =useAuth();
 
  // console.log(user);
  return (
      
    <div className='aboutContainer'>
        <TopLoading/>
         <div className="head2">
         <h2>नमस्कार {user.username}, आकाश करियर अँड पर्सनॅलिटी डेव्हलपमेंट अकॅडमी मध्ये आपले स्वागत आहे</h2>
              <h3 id="heading">                आमचे उद्दिष्ट
          </h3>
          </div>
          <div className="awards">
            <div className="award1">
              <p> <i className="fa-sharp fa-solid fa-arrow-right fa-beat fa-lg mx-3"  > </i>
              पहिली ते चौथीच्या विद्यार्थ्यांना कसे हाताळावे हे शिकवणे त्यांना आहार कसा द्यावा कोणता द्यावा त्यांना कसे शिकवावे त्या विद्यार्थ्यांसंदर्भात सर्व कर्स माहिती आम्ही आमच्या सेमिनार मधून देतो .
                </p>
            </div>
            <div className="award1">
              <p> <i className="fa-sharp fa-solid fa-arrow-right fa-beat fa-lg mx-3"  > </i>
              दुसरा टप्पा पाचवी ते नववी च्या विद्यार्थ्यांना आम्ही स्पेशल कोर्स डेव्हलप केला ज्याद्वारे त्यांनी अभ्यास कसा करावा किती करावा कोणत्या पद्धतीने करावा त्यांचा आहार व्यायाम निद्रा मनशक्ती कशी वाढवावी या आणि आधी सर्व विषयावर आम्ही त्या विद्यार्थ्यांचे कौन्सिलिंग करतो .                         </p>
            </div>
            <div className="award1">
              <p> <i className="fa-sharp fa-solid fa-arrow-right fa-beat fa-lg mx-3"  > </i>
              तिसरा टप्पा दहावी आणि बारावी या विद्यार्थ्यांना आम्ही दहावी नंतर काय आणि बारावीनंतर काय यासंदर्भात एक स्पेशल सेमिनार डेव्हलप केला आहे त्याद्वारे आम्ही त्यांच्या करिअरची दिशा सुचवू शकतो .                         </p>  
            </div>
            <div className="award1">
              <p> <i className="fa-sharp fa-solid fa-arrow-right fa-beat fa-lg mx-3"  > </i>
              चौथा टप्पा पदवीनंतर काय या विषयावर व्यक्तिमत्व विकास मनोविकास स्व विकास त्याचा व्यवसाय विकास आणि करिअरच्या शेकडो दिशा या विषयावर आम्ही त्याला इत्यंभूत सर्व कर्स ज्ञान त्या सेमिनार मधून देतो .                         </p>
              </div>
            <div className="award1">
              <p> <i className="fa-sharp fa-solid fa-arrow-right fa-beat fa-lg mx-3"  > </i>
              पाचवा टप्पा या यामध्ये ज्या व्यक्ती दहावी नापास आहेत बारावी नापास आहेत अर्धवट पदवीधर आहेत त्या लोकांना व बेरोजगारांना आम्ही व्यवसायाच्या संदर्भात अतिशय उपयुक्त आणि महत्त्वपूर्ण माहिती देतो ज्याद्वारे ते स्वतःच्या पायावर उभे राहून आर्थिक दृष्ट्या स्वावलंबी होतील यासाठी आम्ही एक स्पेशल कोर्स डेव्हलप केलेला आहे आणि आमच्या अकॅडमी द्वारे आम्ही त्या त्या शाळेवर जाऊन त्या त्या शहरात जाऊन किंवा त्या त्या संस्थेत जाऊन आम्ही हा सेमिनार घेतो अर्थात वरचे सर्व सेमिनार आम्ही त्या त्यांच्या संस्थेत जाऊन पोच सेवा देतो .
            </p>
            </div> 

  </div>
         {/* <div className="awards ">
            <ul class="list-group list-group-flush ">
              <li class="list-group-item ">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
              <li class="list-group-item">A fourth item</li>
              <li class="list-group-item">And a fifth one</li>
            </ul> 
         </div> */}
          <div className="buttonContainer">
            <form className="">
                  <button className='custom-connect-color '>
                    <NavLink className="nav-link fw-bold  " to="/contact" style={{ color: 'white' }}>
                    आतापासून कनेक्ट करा
                    </NavLink>
                  </button>
                  <button className='ml-5' style={{ backgroundColor: 'transparent', border: '2px solid #17cf97' }}>
  <NavLink className="nav-link fw-bold active" to="/services" style={{ color: 'white' }}>
  अधिक जाणून घ्या
  </NavLink>
</button>

                </form> 
          </div>
        </div>
    
  )
}
