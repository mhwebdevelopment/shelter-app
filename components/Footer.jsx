import React from 'react';
import { AiFillFacebook, AiOutlineMail} from 'react-icons/ai';
const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        <a href="https://colescountyanimalshelter.com/"> Home</a> /
        <a href="https://gofund.me/9542c083"> Donate</a> /
        <a href="mailto:colescountyanimalshelter1@gmail.com?subject=New Volunteer!&body=I would love to volunteer, could I please have some more info on how the process works?"> Volunteer</a>
      </p>
      <p>
        <a href="https://colescountyanimalshelter.com/#about"> About</a> /
        <a href="https://colescountyanimalshelter.com/#faq"> Faq&apos;s</a> /
        <a href="https://colescountyanimalshelter.com/#animals"> Animals</a>
      </p><br></br>
      <p>Website by: <a className="websitelink" href="https://www.mhwebdevelopment.com/"> MH Web Development</a></p>
      <p className="icons">
        <a href="https://www.facebook.com/colescountyanimalshelter/">
          <AiFillFacebook />
        </a>
        <a href="mailto:colescountyanimalshelter1@gmail.com">
          <AiOutlineMail />
        </a>
      </p>
      <hr/>
      <p>&copy; 2022 Coles County Animal Shelter</p>
    </div>
  )
}
export default Footer