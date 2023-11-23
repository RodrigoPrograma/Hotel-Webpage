import { useState } from "react";
import React from "react";
import "../Styles/Navbar.css"
import BurguerButton from "./Burguerbutton";



function Nav () {

    const [clicked, setClicked] = useState(false)
    
    const handleClick = () => {
        setClicked(!clicked)
    }
    console.log(clicked)

    return (
        <>
            <div className="Navbar">
                <div className="navbarContainer">
                    <div className="navImgContainer"><img className="Navbar-img" src="/src/assets/logo2.png" alt="" />
                    </div>
                    <div className={"link-container ${clicked ? '' : 'active'}"}>  
                            <li className="list-link"><a className="Link" href="">Menu</a>
                            </li>
                            <li className="list-link"><a className="Link" href="">Servicios</a>
                            </li>
                            <li className="list-link"><a className="Link" href="">Nosotros</a>
                            </li>
                            <li className="list-link"><a className="Link" href="">Habitaciones</a>
                            </li>
                            <li className="list-link"><a className="Link" href="">Contacto</a>
                            </li>
                    </div>
                        <BurguerButton clicked = {clicked} handleClick ={handleClick}/>
                </div>
                <div className="paragraphContainer">
                    <p className="navParagraph">Abre la puerta para una vida espaciosa</p>
                </div>
            </div>
        </>
    );

};

export default Nav