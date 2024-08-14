import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import "./ZapButton.css"; // Certifique-se de adicionar estilos apropriados

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      <a
        href="https://wa.me/55449997016?text=vim%20do%20site%20e%20gostaria%20de%20mais%20informações."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button whatsapp"
      >
        <FaWhatsapp />
      </a>
      <a
        href="https://www.instagram.com/carroceriasjb/"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button instagram"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default FloatingButtons;
