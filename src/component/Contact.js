import styled from "styled-components";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas, faEnvelope, faGlobePointer, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {

 
  return <section>
    <div className="maincontact"> 
     <div className="contactheader"> <h1>Get In Touch</h1>
     <div className="contacthead"> <h2>Relative info</h2>
     <h3>Contact me</h3>
      </div></div>
      <div className="contactinformation"> <h4><FontAwesomeIcon icon={faLocationDot} />Address: Johar town lahore</h4>
      <h4><FontAwesomeIcon icon={faEnvelope} />Email: techesthe@gmail.com</h4>
      <h4><FontAwesomeIcon icon={faPhone} />Phone: +92084417922</h4>
      <h4><FontAwesomeIcon icon={faEarthAmericas} />website: yoursite@</h4></div>
      
    <div className="contactcontainer">
     
      <div className="contact-form">
        <form action="https://formspree.io/f/myyqwpwr" method="POST" className="contact-inputs">
          <input type="text" placeholder="username" name="username" required autoComplete="off"/>  
          
          <input 
          type="email"
          name="Email"
          placeholder="enter your meassge"
          autoComplete="off"
          required 
          />

          <textarea name="Message"
          cols="30"
          rows="10"
          required
          autoComplete="off"
          placeholder="enter you message"></textarea>
          
<div className="contactbtn">
<input type="submit" value="send" />
</div>
            
            
                </form>
                
      
      </div>
    </div>
    </div>
  </section>;
};

export default Contact;