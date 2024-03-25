import React, { useState, useEffect} from 'react'
import './Contact.css'
import {useAuth} from '../store/auth'
import TopLoading from '../components/TopLoading'
export default function Contact() {

    
    const [contactdetails, setContactdetails] = useState({ username: "", email: "",subject:"", message: "" })
    const [userData, setUserData] = useState(false)

    const {user}=useAuth();

    
    console.log("frontend user ", user.email);
    // if(userData && user){
    //   setContactdetails({
    //     username:user.username,
    //     email:user.email,
    //     subject:"",
    //     message:"",
    //   })  
    // }    
    //   setUserData(false);
    // }
    

  useEffect(() => {
    if (user && user.email && userData === false) {
      setContactdetails({
        username: user.username,
        email: user.email,
        subject: "",
        message: ""
      });
      setUserData(true);
    }
  }, [user,userData]);
    const handleSubmit=async (e)=>{
        e.preventDefault();

       try {
            const response=await fetch('http://localhost:5000/api/auth/contact',{
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify(contactdetails)
          })

          if(response.ok){
            alert("Message sent succesfully");
            setContactdetails({subject:"", message: "" })
          } else {
            console.log("error inside response ", "error");
          }
       } catch (error) {
             console.log('contact',error);
       }
    }
    
    const handleChange=(e)=>{
        setContactdetails({...contactdetails,[e.target.name]: e.target.value})
    }
  return (
    
    <div className="image-about">
        <TopLoading/>
        <div className="hodInfo">
            <div className="info">
                <h1>आर. एम. कुबडे</h1>
                <p> मुख्य संचालक</p>
                <p>आकाश करियर अँड पर्सनॅलिटी डेव्हलपमेंट अकॅडमी</p>
                <p></p>
            </div>
            <div className="icons">
                <ul>
                    <a href="https://maps.app.goo.gl/hx2USKQgyrEFJ5jp9"><i className="fa-sharp fa-solid fa-location-dot fa-2xl"></i></a>
                    <p id="india">India</p>
                    <i className="fa-sharp fa-solid fa-phone fa-2xl"></i>
                    <p>9421387021</p>
                    <i className="fa-solid fa-envelope fa-2xl"></i>
                    <p><a href="mailto:hodit@nitk.edu.in" >rmkubde108@gmail.com</a></p>
                </ul>
            </div>
        </div>
        <div className="cont">
            <form onSubmit={handleSubmit}>
                <h1> आमच्याशी संपर्क साधा</h1>
                <p>तुम्हाला काही प्रश्न आहेत का? कृपया आमच्याशी थेट संपर्क साधण्यास अजिबात संकोच करू नका. आमची टीम तुम्हाला मदत करण्यासाठी काही तासांत तुमच्याकडे परत येईल.</p>
                <div className="name-email">
                   <div className="name"><p>नाव</p>
                    <input type="text" id="name" onChange={handleChange} name="username" value={contactdetails.username}/></div>
                    
                    <div className="name"><p>ईमेल</p>
                    <input type="email" id="email"  onChange={handleChange} name="email" value={contactdetails.email} /></div>
                </div>
                <div className="sub-msg">
                <p>विषय</p>
                <input type="text" id="subject"  name="subject" onChange={handleChange}  value={contactdetails.subject} />
                <p>संदेश</p>
                <textarea id="message" rows="4"  name="message" onChange={handleChange}  value={contactdetails.message}></textarea>
                </div>
                <div className="but">
                    <button type="submit" id="btn" value="Submit Form"  >Send</button>
                </div>
            </form>
        </div>
        <section>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.199476096298!2d76.75686777481182!3d19.273689681971984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd017d8c3ffb33f%3A0xc341c72334eb66fa!2sSwami%20Vivekanand%20Career%20Academy%2C%20Parbhani!5e0!3m2!1sen!2sin!4v1707210373878!5m2!1sen!2sin" width="2380" height="450" style={{border:0,alignItems:'center',justifyContent:'center'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/> */}
        </section>
    </div>
    

  )
}
