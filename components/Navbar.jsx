import React from "react";
import Link from "next/link";
import { AiOutlineHeart} from "react-icons/ai"
import { Fav } from "./";
import { useStateContext} from "../context/StateContext";
const Navbar = () => {
  const { showFav, setShowFav, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <div className="menu-wrap">
      <input type="checkbox" className="toggler"/>
      <div className="hamburger"><div></div></div>
      <div className="menu">
      <div>
        <div>
          <ul>
            <li><a href="http://localhost:3000">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#faq">FAQ's</a></li>
            <li><a href="#animals">Animals</a></li>
            <li><a href="https://gofund.me/9542c083">Donate</a></li>
            <li><a href="mailto:colescountyanimalshelter1@gmail.com?subject=New Volunteer!&body=I would love to volunteer, could I please have some more info on how the process works?">Volunteer</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </div>
      </div>
      </div>
      </div>
      <p className="cart-icon2">
        <Link href="/">Coles County Animal Shelter</Link>
      </p>
      <button type="button" className="cart-icon" onClick={() => setShowFav(true)}>
        <AiOutlineHeart />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showFav && <Fav />}
    </div>
  )
}
export default Navbar