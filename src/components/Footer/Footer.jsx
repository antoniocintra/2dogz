import "./index.css";
import logo from "../../assets/logo.png";
import InstagramIcon from "../../assets/icons/instagram.png";
import TiktokIcon from "../../assets/icons/tiktok.png";

const Footer = () => {
  return (
    <footer>
      <div className="logo-footer">
        <img className="logo" src={logo} alt=" logo 2dogz" />
      </div>
      <div className="footer-center">
        <p>
          © 2025 <strong>2DOGZ</strong> - Todos os direitos reservados.
        </p>
        <p className="company-p">CNPJ: 12.345.678/0001-99</p>
      </div>

      <div className="footer-right">
        <div className="footer-contact">
          <h4>Contato</h4>
          <p>Email: contato@2dogz.com.br</p>
          <p>WhatsApp: (11) 91234-5678</p>
          
        </div>

      </div>
          <div className="footer-social">
           
          <a href="#"><img src={InstagramIcon} alt="Instagram" /></a>
          <a href="#"><img src={TiktokIcon} alt="Tiktok icon" /></a>
        
        </div>
    </footer>
  );
};

export default Footer;
