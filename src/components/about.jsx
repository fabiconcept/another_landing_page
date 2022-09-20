import React from 'react';
import About_Dirt from './About_Dirt';
import google from "../img/market-google-play.png";
import phone01 from "../img/phone01.png";
import ios from "../img/market-ios.png";


const About = () => {
  return (
    <div className="about">
      <About_Dirt/>
      <div className="about-text">
        <div className="flex-row">
          <img src={google} alt=""  />
          <img src={ios} alt=""  />
        </div>
        <label>About Us</label>
        <div className="context">
          <section>
              <div className="pho">
                <img src={phone01} alt=""  />
              </div>
            <div className="img">
            </div>
          </section>
          <section>
            <label>Smart Home's Smart Services</label>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, quisquam ea quos dolorem eveniet voluptatibus minima ducimus nobis, dolorum placeat, labore similique. Aliquid blanditiis corporis natus veritatis repudiandae amet eius? Cupiditate harum voluptates deleniti ipsam voluptatum! Illum est itaque, harum quidem quis rem quaerat pariatur corporis quia velit repellat, eum provident tempore iusto laborum deleniti sint inventore animi fugiat blanditiis.
            </p>
            <div className="btx">
              Learn More
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 

export default About;