import React, { useState, useEffect } from 'react';
import { FaDesktop, FaSearch, FaTools, FaDatabase, FaRocket, FaFileAlt } from 'react-icons/fa';
import '../styles/Service.css';

const servicesData = [
  {
    id: 1,
    title: 'Web Sites',
    icon: <FaDesktop />,
    description: 'Páginas para captura de leads ou para divulgação de produtos e serviços.',
    details: 'Website Completo Gerenciável\n\nTrabalhamos com criação / desenvolvimento de sites totalmente gerenciáveis, que são aqueles que contém além do conteúdo de acesso público, (que apresenta sua empresa), também possuem um painel gerenciador protegido por login e senha, por onde você poderá cadastrar fotos, notícias, serviços, depoimentos, portfólio, entre outros recursos.\n\nMas também trabalhamos com criação / desenvolvimento de sites simples, que são aqueles que não precisam de gerenciamento, também chamados de estáticos.\n\nO investimento em um site simples parte de R$1.200,00.\nSites gerenciáveis, a partir de R$2.800,00.\nOs valores mudam, de acordo com os recursos escolhidos, também mudam, de acordo com os layouts. Fatores como urgência da entrega, criação dos textos do site, apresentação da empresa, fotos se forem reais ou ilustrativas, também alteram o valor final do investimento.',
  },
  {
    id: 2,
    title: 'Otimizador SEO',
    icon: <FaSearch />,
    description: 'Melhore seu posicionamento nos motores de busca com nossa otimização SEO.',
    details: 'A otimização SEO (Search Engine Optimization) é essencial para garantir que seu site seja encontrado facilmente por potenciais clientes. Trabalhamos com uma análise completa do seu site e a implementação das melhores práticas para melhorar seu ranking nos motores de busca, aumentando assim a visibilidade e atraindo mais visitantes para o seu site.',
  },
  {
    id: 3,
    title: 'Manutenção e Suporte Técnico',
    icon: <FaTools />,
    description: 'Garantimos que seu site esteja sempre atualizado e funcionando corretamente.',
    details: 'Oferecemos serviços contínuos de manutenção e suporte técnico para garantir que seu site permaneça em ótimo estado de funcionamento. Isso inclui atualizações regulares, correção de problemas técnicos, e suporte para quaisquer questões que possam surgir, garantindo que seu site esteja sempre seguro e atualizado.',
  },
  {
    id: 4,
    title: 'Hospedagem',
    icon: <FaDatabase />,
    description: 'Serviços de hospedagem confiáveis para garantir que seu site esteja sempre online.',
    details: 'Oferecemos soluções de hospedagem seguras e confiáveis para garantir que seu site esteja sempre acessível. Com nossa hospedagem, você terá suporte técnico dedicado, backups regulares, e um ambiente de servidor otimizado para manter seu site rápido e seguro.',
  },
  {
    id: 5,
    title: 'Landing Pages',
    icon: <FaRocket />,
    description: 'Páginas de captura para maximizar conversões e leads.',
    details: 'Criamos landing pages personalizadas que são projetadas para maximizar as conversões e capturar leads qualificados. Seja para campanhas publicitárias, promoções ou geração de leads, garantimos que sua landing page seja otimizada para atrair e converter visitantes em clientes.',
  },
  {
    id: 6,
    title: 'Consultoria',
    icon: <FaFileAlt />,
    description: 'Consultoria especializada para melhorar sua presença online.',
    details: 'Nossa consultoria oferece uma análise detalhada da sua presença online e recomendações para melhorar seu desempenho. Ajudamos a identificar oportunidades de crescimento, otimizar sua estratégia digital e alcançar seus objetivos de negócios com uma abordagem personalizada.',
  },
];

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleDetailsClick = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  useEffect(() => {
    const serviceItems = document.querySelectorAll('.service-item');
    const handleScroll = () => {
      serviceItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          item.classList.add('reveal');
        } else {
          item.classList.remove('reveal');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="services" className="services">
      <h2>Serviços</h2>
      <div className="service-grid">
        {servicesData.map(service => (
          <div key={service.id} className="service-item">
            <div className="service-icon">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button onClick={() => handleDetailsClick(service)}>Mais Detalhes</button>
          </div>
        ))}
      </div>
      {selectedService && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>{selectedService.title}</h3>
            <p>{selectedService.details}</p>
            <button className="modal-close" onClick={handleCloseModal}>Fechar</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Service;
