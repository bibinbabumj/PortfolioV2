import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


const contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact_items">
         <article className="contact_card">
         <MdOutlineEmail className="contact_icon" />
         <h4> Email</h4>
         <h5>bibinbabumj@gmail.com</h5>
              <a href="mailto:bibinbabumj93@gmail.com ">send a message</a>
         </article>
         <article className="contact_card">
         <FaWhatsappSquare className="contact_icon" />
              <h4> Whatsapp</h4>
              <h5>Whatsapp Message</h5>
              <a href="https://api.whatsapp.com/send?phone=447404436611" target="_blank" rel="noreferrer noopener">send a message</a>
         </article>
         <article className="contact_card">
         <FaPhoneAlt className="contact_icon" />
         <h4> Mobile</h4>
              <h5>+44 7404436611</h5>
              <a href="tel:+447404436611">Call me</a>
         </article>
        </div>

        <form className="conatct_form">
          <input type="text" name='name' placeholder="Your Full Name" required/>
          <input type="email" name='email' placeholder="Your Email" required/>
          <textarea rows='7' name='message' placeholder="Your Message" required/>
          <button type="submit" className="btn btn-primary submit_btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default contact;
