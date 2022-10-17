import React from 'react';
import Link from 'next/link';
const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h1 className="">{heroBanner.largeText1}</h1>
        <div>
          <Link href="https://www.google.com/maps/place/6818+N+Co+Rd+1120E,+Charleston,+IL+61920/@39.4745082,-88.2635537,17z/data=!3m1!4b1!4m5!3m4!1s0x88731b4b4346c12d:0x2670e727e12f3a46!8m2!3d39.4745041!4d-88.261365">
            <button type="button"><h2>{heroBanner.buttonText} </h2></button>
          </Link>  
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1665811846">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
      </svg>
      </div>
    </div>
  )
}
export default HeroBanner