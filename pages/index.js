import React from 'react';
import { client } from '../lib/client';
import { Pet, FooterBanner, HeroBanner, Faq } from '../components';
const Home = ({ pets, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <section className="about" id="about">
    <h2>About Us</h2><br></br>
    <p>We are county taxpayer funded and enforce the Illinois State Animal Control Act and Coles County&apos;s Animal Control Ordinances. Our facility houses animals waiting for owners to claim and waiting adoption.</p>
    <div className='about-image'>
      <img src='assets/sign.jpg'
     width={500} height={375} alt="colescountyanimalshelter"></img>
    </div>
    </section>
    <section id="faq">
    <Faq /> 
    </section>
    <section id="animals">
     <div className="pets-container">
      <h1>Our Animals</h1>
      <p>Ready to meet your Fur-ever friend today?</p>
    </div> 
    <div className="products-container">
      {pets?.map((pet) => <Pet key={pet._id} pet={pet} />)}
    </div>
    </section>
    <section id='footer'>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </section> 
  </div>
);
export const getServerSideProps = async () => {
  const query = '*[_type == "pet"]';
  const pets = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: { pets, bannerData }
  }
}
export default Home;