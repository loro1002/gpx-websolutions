import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa';
import '../styles/Footer.css'; // Certifique-se de atualizar o caminho conforme necessário

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#portifolio">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>

        <div className="footer-info">
          <p>Email: <a href="mailto:jaum775@gmail.com">jaum775@gmail.com</a></p>
          <p>Telefone: <a href="tel:+5511999999999">(44) 99972016</a></p>
          <p>Endereço: Umuarama, PR, Brasil</p>
        </div>

        <div className="footer-social">
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Gpx Web Solutions. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
