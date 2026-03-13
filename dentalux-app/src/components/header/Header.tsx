import logoMobile from "../../assets/images/logoBlue.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import './Header.css'

export function Header() {
  return (

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
    </header>
  );
}
