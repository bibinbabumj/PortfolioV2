import React from "react";
import "./about.css";
import mDev from "../../assets/dev2.jpg";
import { FaUsers } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { GrProjects } from "react-icons/gr";


const about = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about_me">
          <img src={mDev} alt="about_image" className="about_me_image" />
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <MdVerified className="about_icon" />
              <h5> Experience</h5>
              <small>4+ Years wroking</small>
            </article>

            <article className="about_card">
              <FaUsers className="about_icon" />
              <h5> Clients</h5>
              <small>20+ Worldwide</small>
            </article>
            <article className="about_card">
              <GrProjects className="about_icon" />
              <h5> Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <h3>
            "Hi, I'm Bibin Babu, a
            <span>full-stack developer and Android aficionado,</span> dedicated
            to creating seamless digital experiences.
          </h3>
          <p>
            Experienced Android Developer with expertise in mobile application
            development and full-stack web development. Proficient in the
            end-to-end mobile application development life cycle, including
            Android testing frameworks (Junit, Espresso, and Mockito), Java,
            Kotlin, RESTful APIs, Google Maps APIs, and Firebase. Skilled in
            integrating third-party libraries and Google Play services,
            designing user interfaces, and executing Android views and UI
            components. Additionally, adept at crafting dynamic web applications
            with HTML, CSS, Node.js, React.js, and MongoDB. Let's collaborate to
            bring your digital visions to life!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
