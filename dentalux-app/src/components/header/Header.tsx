import logoMobile from "../../assets/images/logoBlue.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { Link } from "react-router";
import { useState } from "react";

export function Header() {
  const [ menuState, setMenuState ] = useState('closed');
  const [ menuButtonState, setMenuButtonState ] = useState('normal');

  const setMenu = () => {
    if(menuState == 'closed') {
      setMenuState('open');
      setMenuButtonState('down');
    } else {
      setMenuButtonState('normal');
      setMenuState('closed')
    }
  }

  return (
    <>
      <header>
        <nav id="mobile-nav">
          <img src={logoMobile} className="logo-mobile" alt="Logo" />
          <div className="end-nav">
            <button className="mobile-services">Ver especialidades</button>
            <button className={`mobile-menu-button ${menuButtonState}`} onClick={() => setMenu()}>
              <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </button>
          </div>
        </nav>
        <div className={`menu ${menuState}`}>
          <div className="mobile-links">
            <Link className="mobile-link" to={'/'}>Início</Link>
            <Link className="mobile-link" to={'/'}>Quem somos</Link>
            <Link className="mobile-link" to={'/'}>Serviços</Link>
            <Link className="mobile-link" to={'/'}>Tratamentos</Link>
            <Link className="mobile-link" to={'/'}>Clinicas</Link>
            <Link className="mobile-link" to={'/'}>Exames</Link>
          </div>
          <div className="white-space"></div>
        </div>
      </header>
    </>
  );
}
