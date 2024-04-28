import React from 'react'
import './Footer.css'
import { FaInstagramSquare,FaTwitterSquare,FaFacebook } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
     <a href='#home' className='footer_logo'>BIBIN</a>
     <ul className='permalinks'>
      <li> <a href='#home'>Home</a></li>
      <li> <a href='#about'>About</a></li>
      <li> <a href='#experience'>Experience</a></li>
      <li> <a href='#portifolio'>Portfolio</a></li>
      <li> <a href='#services'>Services</a></li>
      <li> <a href='#contact'>contact</a></li>
     </ul>

     <div className='social_liks'>
      <a href='http://facebook.com' target='_blank' rel="noreferrer noopener"><FaInstagramSquare/></a>
      <a href='http://facebook.com' target='_blank' rel="noreferrer noopener"><FaTwitterSquare/></a>
      <a href='http://facebook.com' target='_blank' rel="noreferrer noopener"><FaFacebook/></a>
     </div>
     <div className="footer_copyright">
      <small> &copy; @ 2024 Designed and Developed By Bibin Babu. All rights reserved</small>
     </div>
    </footer>
  )
}

export default Footer
