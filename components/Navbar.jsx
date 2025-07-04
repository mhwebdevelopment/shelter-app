import React from "react";
import Link from "next/link";
import { AiOutlineHeart} from "react-icons/ai"
import { useStateContext} from "../context/StateContext";
const Navbar = () => {
  const { } = useStateContext();
  return (
    <div className="navbar-container">
      <div className="menu-wrap">
      <input type="checkbox" className="toggler"/>
      <div className="hamburger"><div></div></div>
      <div className="menu">
      <div>
        <div>
          <ul>
            <li><a href="http://colescountyanimalshelter.com/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#faq">FAQ&apos;s</a></li>
            <li><a href="#animals">Animals</a></li>
            <li><a href="https://gofund.me/9542c083">Donate</a></li>
            <li><a href="tel:2173454112"><AiOutlinePhone />Volunteer</a></li>
            <li><a href="tel:2173454112"><AiOutlinePhone />Contact</a></li>
          </ul>
        </div>
      </div>
      </div>
      </div>
      <p className="cart-icon2">
        <Link href="https://colescountyanimalshelter.com/">Coles County Animal Shelter</Link>
      </p>
      <button type="button" className="cart-icon">
        <a href="https://gofund.me/9542c083"><AiOutlineHeart /></a>
      </button>
    </div>
  )
}
export default Navbar
