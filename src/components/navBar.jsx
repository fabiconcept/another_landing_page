import React from 'react';

const NavBar = () => {
  return (
    <div className="navBar">
        <ul>
            <li className='active'><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#Testimonials">Testimonials</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>

        <div className="logo">
            smartHome
        </div>
        <div className="log">
            <div className="">Login</div>
            <div className="button">Sign up</div>
        </div>
    </div>
  )
}

export default NavBar;