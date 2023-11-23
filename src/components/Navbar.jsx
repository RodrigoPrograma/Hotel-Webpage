import { useState } from "react";
import React from "react";
import "../Styles/Navbar.css"
import BurguerButton from "./Burguerbutton";
import styled from "styled-components";



function Nav () {

    const [clicked, setClicked] = useState(false);
    
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
                    <div className={`link-container ${clicked ? 'active' : ''}`}>  
                            <li onClick ={handleClick} className="list-link"><a className="Link" href="#">Menu</a>
                            </li>
                            <li onClick ={handleClick} className="list-link"><a className="Link" href="#">Servicios</a>
                            </li>
                            <li onClick ={handleClick} className="list-link"><a className="Link" href="#">Nosotros</a>
                            </li>
                            <li onClick ={handleClick} className="list-link"><a className="Link" href="#">Habitaciones</a>
                            </li>
                            <li onClick ={handleClick} className="list-link"><a className="Link" href="#">Contacto</a>
                            </li>
                    </div>
                        <BurguerButton clicked = {clicked} handleClick ={handleClick}/>
                </div>
                <div className="paragraphContainer">
                    <p className="navParagraph">Abre la puerta para una vida espaciosa</p>
                    
                </div>
            </div>
                <Bgdiv className={`initial ${clicked ? 'active' : ''}`}></Bgdiv>
        </>
    );

};

export default Nav

const Bgdiv = styled.div`

    position: absolute;
    background-color: #121212;
    top: -700px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: 0;
    transition: all .6s ease;
    
    &.active{
        border-radius: 0 0 80% 0;
        display: inline-block;              
           top: 0;
           left: 0;
        width: 100%;
        height: 100%;
    }
    `