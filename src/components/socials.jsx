import React from 'react';
import fb from "../img/facebook-f.svg";
import tw from "../img/twitter.svg";
import lin from "../img/linkedin-in.svg";
import ig from "../img/instagram.svg";

const Socials = () => {
  return (
    <div className="socials">
        <img src={fb} alt="" />
        <img src={tw} alt="" />
        <img src={lin} alt="" />
        <img src={ig} alt="" />
    </div>
  )
}

export default Socials;