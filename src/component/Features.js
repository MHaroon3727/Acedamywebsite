import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas, faEnvelope, faGlobePointer, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons'

const Features = () => {

 
  return <section>
    <div className="mainFeatures"> 
     <div className="Featuresheader"> <section id='section3'><h1>placement and career support</h1></section>
     <div className="Featureshead"> <h2>helping students get exposed to a world opportunitities</h2>
     
      </div></div>
      <div className="Featuresinformation"> 
      <h4><FontAwesomeIcon icon={faLocationDot} />World-class curriculam, designed by industry experts</h4>
      <h4><FontAwesomeIcon icon={faEnvelope} />live classes by intructors working in top teck compies</h4>
      <h4><FontAwesomeIcon icon={faPhone} />daily hand picked problems & weekly contents with quick doubbt solving</h4>
      <h4><FontAwesomeIcon icon={faEarthAmericas} />regular 1 : 1 Mentorship sessions and Mock interviews</h4>
      <h4><FontAwesomeIcon icon={faEarthAmericas} />develop industry-relevant projects based on real-world examples</h4></div>

    <div className="Featuresimg">
     
      <div className="Features-img">
      <img src="/images/Features.png" alt='picture'/>
                
      
      </div>
    </div>
    </div>
  </section>;
};

export default Features;