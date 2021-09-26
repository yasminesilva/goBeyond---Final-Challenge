import React, {useState} from "react";
import { HeaderContainer } from "./styles";
import logoCorebiz from "../../assets/logo-corebiz-global.svg"
import { Menu } from '@material-ui/icons';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <HeaderContainer>
            <div className="logo-container">
                <img src={logoCorebiz} alt="Logo da empresa Corebiz"/>
                <Menu onClick={() => setIsOpen(!isOpen)}/>
            </div>

            <div className={`links-container ${isOpen ? "open" : ""}`}>
                <a href="https://www.corebiz.ag/pt/about/" target="_blank" rel="noreferrer">a corebiz</a>
                <a href="https://www.corebiz.ag/pt/#framework-title" target="_blank" rel="noreferrer">serviços</a>
                <a href="https://www.corebiz.ag/pt/cases/" target="_blank" rel="noreferrer">cases</a>
                <a href="https://www.corebiz.ag/pt/contato/" target="_blank" rel="noreferrer">contato</a>
            </div>

        </HeaderContainer>
    )
}

export default Header
