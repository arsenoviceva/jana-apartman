import "./Footer.css";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="container no-margin">
      <div className="footer-grey">
        <p className="footer-text"> Apartman Jana Bijeljina | 2024</p>
        
        <a href="https://www.instagram.com/apartman_jana_bijeljina/" target='_blank'> <FaInstagram className='social' /></a>
        <a href=" https://www.booking.com/hotel/ba/apartman-jana-bijeljina1.hr.html" target='_blanck'><TbBrandBooking className='social'/> </a>

       
      </div>
    </div>
  );
};
export default Footer;
