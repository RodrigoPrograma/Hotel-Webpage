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
            <button><i class="las la-bars"></i></button>
            </div>
        </div>
        <div className="paragraphContainer">
            <p className="navParagraph">Abre la puerta para una vida espaciosa</p>
            </div>
        </div>
        </>
    );

};