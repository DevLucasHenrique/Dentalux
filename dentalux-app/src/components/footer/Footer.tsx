import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router'
import logo from '../../assets/images/logo.png'
import './Footer.css'

export function Footer() {
  return (
    <footer>
      <div className="footer-container">

        <div className="footer-brand">
          <img src={logo} alt="Dentalux" className="footer-logo" />
          <p>Cuidando do seu sorriso com excelência e carinho desde 2008.</p>
          <div className="social-links">
            <a href="https://wa.me/5511952460849" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="https://instagram.com/lucas_.hc" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://instagram.com/lucas_.hc" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Navegação</h4>
          <Link to="/">Início</Link>
          <Link to="/sobre">Quem somos</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/clinicas">Clínicas</Link>
          <Link to="/contato">Contato</Link>
        </div>

        <div className="footer-links">
          <h4>Serviços</h4>
          <Link to="/">Clareamento</Link>
          <Link to="/">Ortodontia</Link>
          <Link to="/">Implantes</Link>
          <Link to="/">Limpeza</Link>
          <Link to="/">Cirurgia</Link>
        </div>

        <div className="footer-contact">
          <h4>Contato</h4>
          <a href="tel:+5511952460849">
            <FontAwesomeIcon icon={faPhone} />
            (11) 99999-0000
          </a>
          <a href="mailto:contato@dentalux.com.br">
            <FontAwesomeIcon icon={faEnvelope} />
            lucashenriquecalixto@gmail.com
          </a>
          <span>
            <FontAwesomeIcon icon={faLocationDot} />
            Rua das Flores, 142 — São Paulo, SP
          </span>
        </div>

      </div>

      <div className="footer-bottom">
        <p>Está é uma loja ficticia e foi feita apenas para fins de portifólio</p>
        <p>Desenvolvido por <a href="https://github.com/DevLucasHenrique" target="_blank" rel="noreferrer">Lucas Henrique</a></p>
      </div>
    </footer>
  )
}