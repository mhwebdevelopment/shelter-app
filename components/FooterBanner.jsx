import React from 'react';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
const FooterBanner = ({ footerBanner: { largeText2, smallText2, smallText3, midText, desc } }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <h1>{largeText2}</h1>
        </div> 
        <div className="footer-contact">
          <a href="tel:2173454112"><p><AiOutlinePhone /> {smallText3}</p></a>
          <p><a href="mailto:colescountyanimalshelter1@gmail.com?subject=New Volunteer!&body=I would love to volunteer, could I please have some more info on how the process works?"><AiOutlineMail /> {smallText2}</a></p>
          <h1>{midText}</h1>
          <p>{desc}</p>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1665809839">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill"></path>
      </svg>
      </div>
    </div>
  )
}
export default FooterBanner