import React from "react";

import { Facebook, LinkedIn, Instagram } from '@material-ui/icons';

import { FooterContainer } from "./styles";

import logoCorebiz from "../../assets/logo-corebiz-global-preto.svg"

const Footer = () => {

    return(

        <FooterContainer>

            <div className="contato-container">

                <div className="redes-sociais">
                    <img src={logoCorebiz} alt="Logo da empresa Corebiz"/>  
                    <p>direitos reservados. corebiz 2021</p>
                    <div className="icones">
                        <a href="https://www.facebook.com/yasmine.silva.98/" target="_blank" rel="noreferrer"><Facebook /></a>
                        <a href="https://www.instagram.com/yasmine_silva_/?hl=pt-br" target="_blank" rel="noreferrer"><Instagram /></a>
                        <a href="https://www.linkedin.com/in/yasmine-silva-a16a11127/" target="_blank" rel="noreferrer"><LinkedIn /></a>
                    </div>
                </div>

                <div className="links-container">
                    <a href="https://www.corebiz.ag/pt/about/" target="_blank" rel="noreferrer">a corebiz</a>
                    <a href="https://www.corebiz.ag/pt/#framework-title" target="_blank" rel="noreferrer">serviços</a>
                    <a href="https://www.corebiz.ag/pt/cases/" target="_blank" rel="noreferrer">cases</a>
                    <a href="https://www.corebiz.ag/pt/contato/" target="_blank" rel="noreferrer">contato</a>
                </div>

            </div>

            <div className="contry-container">

                <div className="contry">
                    <h2>.Brasil</h2>
                    <p>Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP</p>
                    <p>R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP</p>
                </div>

                <div className="contry">
                    <h2>.Argentina</h2>
                    <p>Soler 5518, 3 Piso C1425BYF Palermo Hollywood CABA</p>
                </div>

                <div className="contry">
                    <h2>.México</h2>
                    <p>Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX</p>
                </div>

                <div className="contry">
                    <h2>.Chile</h2>
                    <p>Roberto del Río 1137, Providencia.</p>
                </div>

            </div>

        </FooterContainer>
    )
}

export default Footer