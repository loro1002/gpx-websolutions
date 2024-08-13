import React, { useEffect } from 'react';
import { FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa';
import '../styles/PreFooter.css';
import preFooterImg from '../../public/prefooter.png'; // Atualize o caminho conforme necessário

const PreFooter = () => {
  useEffect(() => {
    const handleScroll = () => {
      const preFooterLeft = document.querySelector('.pre-footer-left');
      const preFooterRight = document.querySelector('.pre-footer-right');
      
      const preFooterLeftPosition = preFooterLeft.getBoundingClientRect().top;
      const preFooterRightPosition = preFooterRight.getBoundingClientRect().top;
      
      const screenPosition = window.innerHeight / 1.2;

      if (preFooterLeftPosition < screenPosition) {
        preFooterLeft.classList.add('reveal');
      } else {
        preFooterLeft.classList.remove('reveal');
      }
      
      if (preFooterRightPosition < screenPosition) {
        preFooterRight.classList.add('reveal');
      } else {
        preFooterRight.classList.remove('reveal');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Para verificar a visibilidade no carregamento
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="pre-footer" aria-labelledby="pre-footer-heading">
      <div className="pre-footer-left">
        <img src={preFooterImg} alt="Imagem de Contato" aria-hidden="true" />
      </div>
      <div className="pre-footer-right">
        <h2 id="pre-footer-heading">Entre em contato conosco</h2>
        <p>Fale conosco hoje mesmo para uma consultoria gratuita!</p>
        <div className="social-icons" role="navigation" aria-label="Redes sociais">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PreFooter;
