import { useState } from "react";
import React from "react";
import "../assets/styles/Navbar.css"
import BurguerButton from "./Burguerbutton";
import styled from "styled-components";
import VientosDelSur from "../assets/imagenes/VientosDelSur.jpg"



function Nav () {

    const [clicked, setClicked] = useState(false);
    
    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <>
            <div className="Navbar">
                <div className="navbarContainer">
                    <div className="navImgContainer"><img className="Navbar-img" src={VientosDelSur} alt="" />
                    </div>
                    <div className={`link-container ${clicked ? 'active' : ''}`}>  
                            <li className="list-link"><a className="Link" href="#">Menu</a>
                            </li>
                            <li className="list-link"><a className="Link" href="#servicios">Servicios</a>
                            </li>
                            <li className="list-link"><a className="Link" href="#sobreNosotros">Nosotros</a>
                            </li>
                            <li className="list-link"><a className="Link" href="#habitaciones">Habitaciones</a>
                            </li>
                            <li className="list-link"><a className="Link" href="#form">Contacto</a>
                            </li>
                    </div>
                        <BurguerButton clicked = {clicked} handleClick ={handleClick}/>
                </div>
                <div className="paragraphContainer">
                    <p className="navParagraph">Vientos del Sur Resort, donde el confort se encuentra con las profundidades</p>
                    
                </div>
            </div>
                <Bgdiv className={`initial ${clicked ? 'active' : ''}`}></Bgdiv>
        </>
    );

}

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