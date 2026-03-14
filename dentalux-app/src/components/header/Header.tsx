import logoMobile from "../../assets/images/logoBlue.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { Link } from "react-router";

export function Header() {
  return (
    <>
      <header>
        <nav id="mobile-nav">
          <img src={logoMobile} className="logo-mobile" alt="Logo" />
          <div className="end-nav">
            <button className="mobile-services">Ver especialidades</button>
            <button className="mobile-menu-button">
              <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </button>
          </div>
        </nav>
        <div className="menu">
          <button className="login">Entrar</button>
          <div className="mobile-links">
            <div className="info-group">
              <div className="head">
                <h4 className="menu-title">Início</h4>
                <button className="down"></button>
              </div>
              <div className="info-links">
                <Link to={'/'}></Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
