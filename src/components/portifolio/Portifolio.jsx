import React from 'react'
import './portifolio.css'
import imgSharhah from "../../assets/sharjah.jpg";
import imgAster from "../../assets/aster.jpg";
import imgHeineken from "../../assets/heineken.jpg";
import imgScayn from "../../assets/sacyn.jpeg";
import imgIsolo from "../../assets/isolo.jpeg";
import imgFiat from "../../assets/fiat.jpeg";


const Portifolio = () => {
  return (
    <section id='portifolio'>
      <h5>My Works</h5>
      <h2>Portfolio</h2>
      <div className="container portifolio__container">
        <article className='portifolio_item'>
          <div className='portifolio_item_img'>
            <img src={imgSharhah} alt='item-img'></img>
          </div>
          <h3>SHARJAH AIRPORT</h3>
        </article>

        <article className='portifolio_item'>
          <div className='portifolio_item_img'>
            <img src={imgAster} alt='item-img'></img>
          </div>
          <h3>ASTER MEDICITY</h3>
        </article>

        <article className='portifolio_item'>
          <div className='portifolio_item_img'>
            <img src={imgHeineken} alt='item-img'></img>
          </div>
          <h3>HEINEKEN GLOBAL CHEERS</h3>
        </article>
        <article className='portifolio_item'>
          <div className='portifolio_item_img'>
            <img src={imgScayn} alt='item-img'></img>
          </div>
          <h3> SACYN APP</h3>
        </article>
        <article className='portifolio_item'>
          <div className='portifolio_item_img'>
            <img src={imgFiat} alt='item-img'></img>
          </div>
          <h3>MEAA FCA R1LOW</h3>
        </article>
        <article className='portifolio_item'>
          <div className='portifolio_item_img'>
            <img src={imgIsolo} alt='item-img'></img>
          </div>
          <h3>ISOLE BORROMEE</h3>
        </article>

        

      </div>
    </section>
  )
}

export default Portifolio
