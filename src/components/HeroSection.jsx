import React, { useEffect } from 'react';
import './Hero.css';
import heroimg from '../../public/hero-img.png'; // Verifique se o caminho está correto

const HeroSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.hero');
      const heroPosition = hero.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (heroPosition < screenPosition) {
        hero.classList.add('reveal');
      } else {
        hero.classList.remove('reveal');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Aplica a animação no carregamento inicial
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <h1>Transformando Ideias em Soluções Digitais</h1>
        <p>Criação de websites modernos, responsivos e otimizados para seu negócio.</p>
        <div className="hero-buttons">
          <a href="#services"><button aria-label="Conheça nossos serviços">Conheça nossos serviços</button></a>
          <a href="#portifolio"><button aria-label="Veja nossos projetos">Veja nossos projetos</button></a>
        </div>
      </div>
      <div className="hero-right">
        <figure>
          <img className="hero-img" src={heroimg} alt="Imagem do Hero" />
        </figure>
      </div>
    </section>
  );
};

export default HeroSection;
