import React from 'react';
import arr from "../img/arrow-up.svg";
import line from "../img/line.png";

const About_Dirt = () => {

  const click_cl = ()=>{
    const cl = document.querySelector(".cl");
    cl.click();
  }
  return (
    <div className="ab_dirt">
        <div className="squares">
            <div onClick={click_cl}><img src="/static/media/arrow-up.10800ec979d1b6e1fa3678fa9bf51170.svg" alt="" /></div>
            <div id='about'></div>
            <div></div>
            <div></div>
        </div>
        <div className="free-line">
            <img src="/static/media/line.1781ccd23c4b544acc8c.png" alt="" />
        </div>
        <div className="free-donut">
          <a href="#about" className='cl' style={{opacity: 0}}></a>
        </div>
    </div>
  )
}

export default About_Dirt;