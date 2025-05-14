import "./index.css";
import logo from "../../assets/logo.png";
import '@fortawesome/fontawesome-free/css/all.min.css'

function Header() {
  return (
    <header>
      <nav className="navbar">
          <div className="logo-container">
            
           <img className="logo" src={logo} alt=" logo 2dogz" />
          </div>
          <ul className="menu-items">
            <li>Início
              <i className="fas fa-paw hover-icon"></i>
            </li>
            <li>Sobre
              <i className="fas fa-paw hover-icon"></i>
            </li>
            <li>Hotel
              <i className="fas fa-paw hover-icon"></i>
            </li>
            <li>Creche
              <i className="fas fa-paw hover-icon"></i>
            </li>
            <li>Contato
              <i className="fas fa-paw hover-icon"></i>
            </li>
          </ul>
        
      </nav>
    </header>
  );
}

export default Header;
