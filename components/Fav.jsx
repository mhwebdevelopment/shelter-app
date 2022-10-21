import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineLeft, AiOutlineHeart } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
const Fav = () => {
  const favRef = useRef();
  const { totalQuantities, favItems, setShowFav, onRemove, } = useStateContext();
  return (
    <div className="cart-wrapper" ref={favRef}>
      <div className="cart-container">
        <button
        type="button"
        className="cart-heading"
        onClick={() => setShowFav(false)}>
          <AiOutlineLeft />
          <span className="heading">Your Pets</span>
          <span className="cart-num-items">({totalQuantities} pets)</span>
        </button>
        {favItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineHeart size={150} />
            <h3>You don&apos;t have any favorites yet</h3>
            <Link passhref="/">
              <button
                type="button"
                onClick={() => setShowFav(false)}
                className="btn"
              >
                Back to Pets
              </button>
            </Link> 
          </div>
        )}
        <div className="product-container">
          {favItems.length >= 1 && favItems.map((item) => (
            <div className="product" key={item._id}>
              <Image src={urlFor(item?.image[0])} className="cart-product-image" alt="pet picture" />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>{item.gender} - {item.age}</h4>
                </div>
                <div className="flex bottom">
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
          <div className="cart-bottom">
            <Link passHref="https://docdro.id/YkZLm1f">
                <div className="btn-container">
                    <button type="button" className="btn">
                     Get the application
                    </button>
                </div>
            </Link>
          </div>
      </div>
    </div>
  )
}
export default Fav