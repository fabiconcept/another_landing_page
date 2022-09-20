import React from 'react';
import Dirt from './dirt';
import NavBar from './navBar';
import phone01 from "../img/phone01.png";
import phone02 from "../img/phone02.png";
import phone03 from "../img/phone03.png";
import Socials from './socials';

const Home = () => {
  return (
    <div className="main">
        <Dirt/>
        <NavBar/>
        <div className="text">
            <h1>Smart Home Application</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, facere. Debitis, in dolor ea libero magni deleniti nobis iure aliquid tenetur exercitationem.</p>
        </div>
        <div className="images">
            <div className="img"><img src={phone01} alt="" /></div>
            <div className="img"><img src={phone02} alt="" /></div>
            <div className="img"><img src={phone03} alt="" /></div>
        </div>
        <Socials/>
    </div>
  )
}

export default Home;