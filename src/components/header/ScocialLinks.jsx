import React from 'react'
import { FaHashnode,FaLinkedin,FaGitlab,FaGithub} from "react-icons/fa6";


const ScocialLinks = () => {
  return (
    <div className='social__links'>
        <a href='https://www.linkedin.com/in/bibin-babu-295b7a271/' target='_blank' rel="noreferrer noopener"><FaLinkedin /></a>
        <a href='https://gitlab.com/bibinbabu.mj' target='_blank'rel="noreferrer noopener"><FaGitlab /></a>
        <a href='https://github.com/bibinbabumj' target='_blank' rel="noreferrer noopener"><FaGithub /></a>
        <a href='https://bibinbabu.hashnode.dev/' target='_blank' rel="noreferrer noopener"><FaHashnode /></a>
        
      
    </div>
  )
}

export default ScocialLinks
