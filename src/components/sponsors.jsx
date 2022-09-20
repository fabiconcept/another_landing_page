import React from 'react';
import SponDirt from './spon-dirt';
import client1 from "../img/sponsors/client1.png";
import client2 from "../img/sponsors/client2.png";
import client3 from "../img/sponsors/client3.png";
import client4 from "../img/sponsors/client4.png";
import client5 from "../img/sponsors/client5.png";
import client6 from "../img/sponsors/client6.png";
import client7 from "../img/sponsors/client7.png";
import client8 from "../img/sponsors/client8.png";
import thing from "../img/thing.png";
import Testimony from './testimony';
import Faq from './faq';
import Contact from '../components/contact';

const Sponsors = () => {
  return (
    <div className="sponsors">
        <SponDirt/>
        <div className="thing">
          <img src={thing} alt="" />
          <img src={thing} alt="" />
        </div>
        <div className="text">
          <h1>Our Clients</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil error perferendis, maiores praesentium nemo eos, recusandae quas repudiandae maxime nobis impedit amet. Blanditiis fugiat sequi similique aliquid inventore ipsam eum?</p>
        </div>
        <div className="images">
          <div><img src={client1} alt="" /></div>
          <div><img src={client2} alt="" /></div>
          <div><img src={client3} alt="" /></div>
          <div><img src={client4} alt="" /></div>
          <div><img src={client5} alt="" /></div>
          <div><img src={client6} alt="" /></div>
          <div><img src={client7} alt="" /></div>
          <div><img src={client8} alt="" /></div>
        </div>
        <div className="thing" id='Testimonials'>
          <img src={thing} alt="" />
          <img src={thing} alt="" />
        </div>
        <div className="text">
          <h1 className='mt-4'>Testimonials</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit iste debitis, dolorem quisquam quasi totam et aut blanditiis! Unde, qui tenetur ipsa laborum praesentium animi magnam quod. Sapiente, quas commodi?</p>
        </div>
        <div className="testimony">
          <Testimony/>
          <Testimony/>
          <Testimony/>
          <Testimony/>
        </div>
        <div className="thing">
          <img src={thing} alt="" />
          <img src={thing} alt="" />
        </div>
        <div className="text">
          <h1 className='mt-3'>FAQ's</h1>
          <div className="faqs">
            <Faq/>
            <Faq/>
            <Faq/>
            <Faq/>
            <Faq/>
          </div>
        </div>
        <div className="thing" id="Contact">
          <img src={thing} alt="" />
          <img src={thing} alt="" />
        </div>
        <div className="text">
            <h1>Contact us</h1>
            <p>Sens Us an Email</p>
        </div>
        <Contact/>
    </div>
  )
}

export default Sponsors;