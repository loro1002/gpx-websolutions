import React from 'react';
import '../styles/Portifolio.css';
import heroImg from '../../public/hero-img.png';
import carroceriasImg from '../../public/carrocerias-jb.png';
import image3 from '../../public/prefooter.png';

const projects = [
  {
    id: 1,
    title: 'Projeto 1',
    description: 'Descrição breve do projeto 1.',
    image: heroImg, // Imagem importada
    github: 'https://github.com/usuario/projeto1',
    live: 'https://www.exemplo.com/projeto1'
  },
  {
    id: 2,
    title: 'Fabrica carrocerias',
    description: 'Fabricação e reformas em geral.',
    image: carroceriasImg, // Imagem importada
    github: 'https://github.com/usuario/projeto2',
    live: 'https://carroceriasjb.com.br/'
  },
  {
    id: 3,
    title: 'Projeto 3',
    description: 'Descrição breve do projeto 3.',
    image: image3, // Imagem importada
    github: 'https://github.com/usuario/projeto3',
    live: 'https://www.exemplo.com/projeto3'
  },
  // Adicione mais projetos conforme necessário
];

const Portfolio = () => {
  return (
    <section id="portifolio" className="portfolio">
      <h2 className="portfolio-title">Portfólio</h2>
      <div className="project-gallery">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
