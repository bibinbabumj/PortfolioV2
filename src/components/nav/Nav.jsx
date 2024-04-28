import React, { useState,useCallback } from "react";
import "./nav.css";
import { FaUser, FaLaptopCode, FaBookOpen } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import { MdContacts } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import { useEffect } from "react";

const Nav = () => {
  const [active, setActive] = useState("#");

  /**
 * Defines a memoized callback function to update the active state.
 * The setActive function is memoized as a dependency, ensuring the callback function
 * is re-created only if setActive changes.
 * 
 * @param {string} status - The new status value to set as active.
 */
  const onStatusChange = useCallback((status) => {
    setActive(status);
  }, [setActive]); 

/**
 * Determines the active section based on its visibility in the viewport.
 * If any part of the section is within the viewport, sets the active section to the section's ID.
 */

  const onStatusChangeScroll =()=>{
    const section= document.querySelectorAll('section')
    let currectActiveSection='#'
    
    section.forEach(section=>{
      const rect = section.getBoundingClientRect();
      if ((rect.top >= 0 && rect.top <= window.innerHeight) || (rect.bottom >= 0 && rect.bottom <= window.innerHeight)) {
        currectActiveSection = `#${section.id}`;
        console.log(currectActiveSection)
    }
    setActive(currectActiveSection);
      
    })
  }

  /**
 * Attaches a scroll event listener to the window when the component mounts.
 * The listener calls the onStatusChangeScroll function whenever the user scrolls the page.
 * Removes the scroll event listener when the component unmounts to avoid memory leaks.
 */
  useEffect(()=>{
    window.addEventListener('scroll',onStatusChangeScroll)

    return()=>{
      window.removeEventListener('scroll',onStatusChangeScroll)
    }

  },[]) // Empty dependency array means it only runs once, on mount

  return (
    <nav className="nav-container">
      <a href="#home" className={active === "#" ? "active" : ""} onClick={() => onStatusChange('#')}>
        <IoHomeSharp />
      </a>
      <a href="#about"  className={active === "#about" ? "active" : ""} onClick={() => onStatusChange('#about')}>
        <FaUser />
      </a>
      <a href="#experience" className={active === "#experience" ? "active" : ""} onClick={() => onStatusChange('#experience')}>
        <FaBookOpen />
      </a>
      <a href="#portifolio" className={active === "#portifolio" ? "active" : ""} onClick={() => onStatusChange('#portifolio')}>
        <FaLaptopCode />
      </a>
      <a href="#services" className={active === "#services" ? "active" : ""} onClick={() => onStatusChange('#services')}>
        <FaRegHandshake />
      </a>
      <a href="#contact" className={active === "#contact" ? "active" : ""} onClick={() => onStatusChange('#contact')}>
        <MdContacts />
      </a>
    </nav>
  );
};

export default Nav;
