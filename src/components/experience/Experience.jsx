import React from "react";
import "./experience.css";
import { FaCss3Alt,FaHtml5,FaJava,FaGithub } from "react-icons/fa6";
import { RiJavascriptLine } from "react-icons/ri";
import { BsFiletypeXml } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiJetpackcompose,SiKotlin,SiFirebase,SiMongodb,SiNodedotjs} from "react-icons/si";





const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_conatiner">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
            <FaHtml5 className="experience_details_icon" />
              <div>
              <h4>HTML</h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
            <RiJavascriptLine className="experience_details_icon" />
              <div>
              <h4>JavaScript</h4>
              <small>Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
            <FaCss3Alt className="experience_details_icon" />
              <div>
              <h4>CSS</h4>
              <small>Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
            <BsFiletypeXml className="experience_details_icon" />
              <div>
              <h4>XML</h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
            <FaReact className="experience_details_icon" />
              <div>
              <h4>React JS</h4>
              <small>Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
            <SiJetpackcompose className="experience_details_icon" />
              <div>
              <h4>Jetpack</h4>
              <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">

        <h3>Backend Development</h3>
          <div className="experience_content">
          <article className="experience_details">
          <FaJava className="experience_details_icon" />
              <div>
              <h4>Java</h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
            <SiKotlin className="experience_details_icon" />
              <div>
              <h4>Kotlin</h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
            <SiNodedotjs className="experience_details_icon" />
              <div>
              <h4>Node Js</h4>
              <small>Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
            <SiMongodb className="experience_details_icon" />
              <div>
              <h4>MongoDb</h4>
              <small>Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
            <SiFirebase className="experience_details_icon" />
              <div>
              <h4>Firebase</h4>
              <small>Experienced</small>
              </div>
             
            </article>
            <article className="experience_details">
            <FaGithub className="experience_details_icon" />
              <div>
              <h4>Git</h4>
              <small>Experienced</small>
              </div>
            </article>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Experience;
