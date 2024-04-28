import React from "react";
import "./services.css";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { VscFileCode } from "react-icons/vsc";


const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2> My Services</h2>
      <div className="container services__container">
        <article className="services_card">
          <div className="services_head">
            <h3>Web Design</h3>
          </div>
          <div className="services_body">
            <CgWebsite className="services_icon" />
            <small className="services_details">
              Beautiful and elegany designs with interfaces that are intuitive,
              efficient and pleasant to use for the user
            </small>
          </div>
        </article>

        <article className="services_card">
          <div className="services_head">
            <h3>Full Stack Development</h3>
          </div>
          <div className="services_body">
            <VscFileCode className="services_icon" />
            <small className="services_details">
              Crafting dynamic web applications with HTML, CSS, Node.js,
              React.js, and MongoDB, custom web development tailored to your
              specification, designed to provide a flawless user experience.
            </small>
          </div>
        </article>

        <article className="services_card">
          <div className="services_head">
            <h3>Mobile App</h3>
          </div>
          <div className="services_body">
            <MdOutlineDeveloperMode className="services_icon" />
            <small className="services_details">
              Proficient in the end-to-end mobile application development ,
              provide a seamless user experience
            </small>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
