import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import '../styles/About.css'; // Atualize o caminho conforme necessário

const About = () => {
  useEffect(() => {
    ScrollReveal().reveal('.title', {
      duration: 1000,
      origin: 'left',
      distance: '50px',
      easing: 'ease-in-out'
    });
    ScrollReveal().reveal('.subtitle', {
      duration: 1000,
      origin: 'left',
      distance: '50px',
      easing: 'ease-in-out',
      delay: 500
    });
    ScrollReveal().reveal('.description', {
      duration: 1000,
      origin: 'bottom',
      distance: '30px',
      easing: 'ease-in-out',
      delay: 1000
    });
    ScrollReveal().reveal('.difference', {
      duration: 1000,
      origin: 'bottom',
      distance: '30px',
      easing: 'ease-in-out',
      delay: 1500
    });
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2 className="title">Quem Somos</h2>
        <p className="description">Na Gpx Web Solutions, nos destacamos na criação de soluções digitais personalizadas, desenvolvidas para atender às necessidades exclusivas de cada cliente. Nossa equipe de especialistas utiliza tecnologia de ponta e práticas avançadas de desenvolvimento para construir sistemas e websites que não apenas atendem, mas superam as expectativas.

Cada projeto é cuidadosamente planejado e executado com atenção aos detalhes, garantindo que o resultado final seja funcional, estético e alinhado com seus objetivos de negócio. Evitamos o uso de plataformas genéricas e pré-fabricadas, optando por programação personalizada desde o início, o que permite uma flexibilidade incomparável e um desempenho otimizado.

Nosso compromisso é entregar soluções leves, responsivas e visualmente atraentes, sempre focadas na criação de experiências digitais inovadoras e eficazes. Se você busca um parceiro que entende suas necessidades e entrega resultados excepcionais, a Gpx Web Solutions é a escolha ideal.</p>
        <h3 className="subtitle">Nosso diferencial</h3>
        <p className="difference">Nossas soluções são exclusivas e mantidas por nós, sem uso de plataformas pré-prontas como WordPress, Wix ou Webflow. Criamos sites e sistemas personalizados, programados do zero, com códigos leves, responsivos e design moderno, sempre atendendo às necessidades específicas de cada cliente.</p>
      </div>
    </section>
  );
};

export default About;
