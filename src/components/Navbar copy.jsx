import React from "react";
import "../Styles/Navbar.css"



export const Nav = () => {

    return (
    <>
    <div className="Navbar">
        <div className="navbarContainer">
            <div className="navImgContainer"><img className="Navbar-img" src="/src/assets/logo2.png" alt="" />
            </div>
            <div className="link-container">
                /*<ul className="un-list">
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
    <i class="las la-bars"></i>
        <div className="paragraphContainer">
            <p className="navParagraph">Abre la puerta para una vida espaciosa</p>
            </div>
        </div>
        </>
    );

};