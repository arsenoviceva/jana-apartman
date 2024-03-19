import "./Contact.css";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { ContactForm } from "./ContactForm";

const Contact = () => {
  return (
    <div className="container" id="contact">
      <div className="titleRow">
        <h3 className="title">
          Kontakt
        </h3>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <p className="contact-info">
            {" "}
            Pronadjite nas na instagramu i bookingu{" "}
          </p>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/apartman_jana_bijeljina/"
              target="_blank"
            >
              {" "}
              
               
              <FaInstagram className="icons" />
            </a>
            <a
              href=" https://www.booking.com/hotel/ba/apartman-jana-bijeljina1.hr.html"
              target="_blanck"
            >
              <TbBrandBooking className="icons" />{" "}
            </a>
          </div>
          <br/>
          <div class="elfsight-app-dd0bc6f4-3d7a-4ea2-8d24-8abae412ed0f" data-elfsight-app-lazy></div>

        </div>
        <div className="col-lg-6">
          <p className="contact-info-mail"> Kontaktirajte nas putem email-a </p>
          <ContactForm />
        </div>
        <div className="col-lg-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2833.2250748003!2d19.214720892517168!3d44.75582430584045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475be8e31ecf9883%3A0xadc17647fefad929!2sAtinska%2025%2C%20Bijeljina%2076300!5e0!3m2!1sen!2sba!4v1710427192021!5m2!1sen!2sba"
            width="100%"
            height="450"
            style={{ border: "0", marginTop: "4rem" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};
export default Contact;
