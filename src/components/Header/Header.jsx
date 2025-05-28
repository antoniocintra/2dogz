import "./index.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo-container">
          <img className="logo" src={logo} alt=" logo 2dogz" />
        </div>
        <ul className="menu-items">
          <li>
            <Link to="/">Início</Link>
            <i className="fas fa-paw hover-icon"></i>
          </li>

          <li>
            <Link to = "/sobre"> Sobre</Link>
            <i className="fas fa-paw hover-icon"></i>
          </li>
          <li>
            Hotel
            <i className="fas fa-paw hover-icon"></i>
          </li>
          <li>
            Creche
            <i className="fas fa-paw hover-icon"></i>
          </li>
          <li>
            Contato
            <i className="fas fa-paw hover-icon"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
