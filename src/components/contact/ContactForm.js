import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const service_id = 'service_p0o7foi';
    const template_id = 'template_zta55ak';
    const public_key = 'kk31F6hBDwVgxf-l5';

    emailjs
      .sendForm(
        service_id, template_id,
        form.current, {
        publicKey: public_key,
      })
      .then(
        (result) => {
          console.log(result.text);
          alert('Poruka uspješno poslata');
        },
        (error) => {
          console.log( error.text)
          alert('Greška, pokušajte ponovo');
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='contact__form'>
      
      <label>Name</label>
      <input type="text" name="user_name" className='input' />
      <label >Email </label>
      <input type="email" required  name="user_email" className='input' />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" className='submit__btn'/>
     
    </form>
  );
};

 