import React from "react"
import "../Styles/Footer.css"

export const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className="footerHeader">
        <h5 className='get'>get in touch</h5>
        <p className='footerParagraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  enim, molestias expedita eligendi.</p>
      </div>
      <div className='fotterlist'>
        <ul className='listOflinks'>
          <h4 className='listHeader'>Navegacion</h4>
          <a className='listItem' href="#">Home</a>
          <a className='listItem' href="#">Servicios</a>
          <a className='listItem' href="#">Nosotros</a>
          <a className='listItem' href="#">Contacto</a>
        </ul>
        <ul className='listOflinks'>
          <h4 className='listHeader'>Informacion util</h4>
          <a className='listItem' href="#">FAQ </a>
          <a className='listItem' href="#">Blog</a>
          <a className='listItem' href="#">Legales</a>
          <a className='listItem' href="#">Politica de privacidad</a>
        </ul>
      <div className='social'>
        <i class="icon lab la-twitter"></i>
        <i class="icon lab la-youtube"></i>
        <i class="icon lab la-facebook"></i>
        </div>
      </div>
      <hr className='separator'/>
    <p className='copy'>Copyright @2023</p>
    </div>
  )
}