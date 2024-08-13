import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../styles/Contact.css'; // Certifique-se de atualizar o caminho conforme necessário

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contato</h2>
      <div className="contact-container">
        <form className="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
          <fieldset>
            <legend>Entre em Contato</legend>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            
            <button type="submit">Enviar</button>
          </fieldset>
        </form>
        <div className="social-links">
          
          <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
