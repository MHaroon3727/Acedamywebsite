import React from 'react'

function Footer() {
  return (
    <>
    <div className="main-footer">
        <div className="footer-left">
            
            <img src="/images/logo.png" alt="Logo" />
           
            <div className='footer-content'>
            <h1>Helping ambitious learners upskill themselves & shift to top product based companies</h1>
            </div>
        

        </div>
        <div className="footer-center">
          <ul>
            <li>< a  href="#">About</a></li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms of services</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-right">
        <ul>
            <li>< a  href="#">UseFul Link</a></li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Linkedin</li>
            <li>Telegram</li>
            <li>Youtube</li>
          </ul>
         </div>
         
    </div>
    </>
  );
}

export default Footer