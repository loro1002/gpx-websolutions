import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';
import logo from '../../public/logo-px.png'; // Certifique-se de que o caminho está correto

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className='header'>
      <a href="#home" aria-label="Voltar ao início" className='logo-container'>
        <img src={logo} alt="GPX Solutions Logo" className='logo' />
        <span className='logo-text'>Gpx Web Solutions</span>
      </a>
      <nav className={`nav-bar ${isOpen ? 'active' : ''}`} aria-label="Navegação principal">
        <ul className='nav-ul'>
          <li className='nav-list'><a className='nav-link' href="#home">Home</a></li>
          <li className='nav-list'><a className='nav-link' href="#about">Sobre</a></li>
          <li className='nav-list'><a className='nav-link' href="#services">Serviços</a></li>
          <li className='nav-list'><a className='nav-link' href="#portifolio">Portfólio</a></li>
          <li className='nav-list'><a className='nav-link' href="#contact">Contato</a></li>
        </ul>
      </nav>
      <button className='hamburger' onClick={toggleMenu} aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
};

export default Header;
