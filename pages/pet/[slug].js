import React, { useState } from 'react';
import { client, urlFor } from '../../lib/client';
import { Pet, FooterBanner } from '../../components';
import { useStateContext } from '../../context/StateContext';
const PetDetails = ({ pet, pets, bannerData } ) => {
  const { image, name, age, gender, details } = pet;
  const [index, setIndex] = useState(0);
  const { } = useStateContext()
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[0])} className="product-detail-image" alt="animal pictures" />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img 
                key={i}
                src={urlFor(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
                alt="animal pics"
              />
            ))}
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">{gender} - {age}</p>
          <div className="buttons">
            <a href="tel:2173454112"><button type="button" className="add-to-cart">Call Now</button></a>
            <a href="https://docdro.id/YkZLm1f"><button type="button" className="buy-now">Get an Application</button></a>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
          <h2>More Animals</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {pets.map((item) => (
                <Pet key={item._id} pet={item} />
              ))}
            </div>
          </div>
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  )
}
export const getStaticPaths = async () => {
  const query = `*[_type == "pet"] {
    slug {
      current
    }
  }
  `;
  const pets = await client.fetch(query);
  const paths = pets.map((pet) => ({
    params: { 
      slug: pet.slug.current
    }
  }));
  return {
    paths,
    fallback: 'blocking'
  }
}
export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "pet" && slug.current == '${slug}'][0]`;
  const petsQuery = '*[_type == "pet"]'
  const pet = await client.fetch(query);
  const pets = await client.fetch(petsQuery);
  console.log(pet);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: { pets, pet, bannerData }
  }
}
export default PetDetails