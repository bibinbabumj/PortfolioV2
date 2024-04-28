import React from 'react'
import Cv from '../../assets/cv.pdf'

const CvTalk = () => {
  return (
    <div className='cv_talk'>
        <a className= "btn" href={Cv} download>Downlod CV</a>
        <a className="btn btn-primary" href='#contact'>Lets's Talk</a>
      
    </div>
  )
}

export default CvTalk
