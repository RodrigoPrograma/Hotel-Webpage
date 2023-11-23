import { useState } from "react";
import React from "react";
import "../Styles/Navbar.css"
import BurguerButton from "./Burguerbutton";



export const Nav = () => {

    const [clicked, setClicked] = useState(false)
    return (
        <>
            <div className="Navbar">
                <div className="navbarContainer">
                    <div className="navImgContainer"><img className="Navbar-img" src="/src/assets/logo2.png" alt="" />
                    </div>
                        <BurguerButton />
                    <div className={"link-container ${clicked ? 'active' : ''}"}>  
                        <ul className="un-list active">
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
                        </ul>
                    </div>
                </div>
                <div className="paragraphContainer">
                    <p className="navParagraph">Abre la puerta para una vida espaciosa</p>
                </div>
            </div>
        </>
    );

};