import React from 'react';
import Link from 'next/link';
import { AiFillFacebook } from 'react-icons/ai';
const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        <Link href="https://colescountyanimalshelter.com/"> Home</Link> /
        <Link href="https://gofund.me/9542c083"> Donate</Link> /
        <Link href="mailto:colescountyanimalshelter1@gmail.com?subject=New Volunteer!&body=I would love to volunteer, could I please have some more info on how the process works?"> Volunteer</Link>
      </p>
      <p>
        <Link href="/#about"> About</Link> /
        <Link href="/#faq"> Faq&apos;s</Link> /
        <Link href="/#animals"> Animals</Link>
      </p><br></br>
      <p>Website by: <a className="websitelink" href="https://www.mhwebdevelopment.com/"> MH Web Development</a></p>
      <p className="icons">
        <a href="https://www.facebook.com/colescountyanimalshelter/">
          <AiFillFacebook />
        </a>
      </p>
      <hr/>
      <p>&copy; 2022 Coles County Animal Shelter</p>
    </div>
  )
}
export default Footer
