import "./Footer.css";
import React from "react";
import { TbBrandInstagram } from "react-icons/tb";
import { TbBrandBooking } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="container no-margin">
      <div className="footer-grey">
        <p className="footer-text"> Apartman Jana Bijeljina | 2024</p>
        
        <a href="https://www.instagram.com/apartman_jana_bijeljina/" target='_blank' rel="noreferrer"> <TbBrandInstagram className='social' /></a>
        <a href=" https://www.booking.com/hotel/ba/apartman-jana-bijeljina1.hr.html" target='_blank' rel="noreferrer"><TbBrandBooking className='social'/> </a>

       
      </div>
    </div>
  );
};
export default Footer;
