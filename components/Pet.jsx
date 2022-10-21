import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../lib/client';
const Pet = ({ pet: { image, name, slug, age, gender } }) => {
  return (
    <div>
      <Link passhref={`/pet/${slug.current}`}>
        <div className="product-card">
          <Image 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
            alt="pet picture"
          />
          <p className="product-price">{name}</p>
          <p className="product-name">{gender} - {age}</p>
        </div>
      </Link>
    </div>
  )
}
export default Pet