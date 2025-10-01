// src/components/Footer.tsx
import { MapPin, Phone, Mail } from "lucide-react";
import "../components/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">SportHub</h2>
        <p className="footer-text">Conectando você ao esporte!</p>

        <div className="footer-info">
          <p><MapPin size={16}/> Rua Exemplo, 123 - Bauru/SP</p>
          <p><Phone size={16}/> (14) 99999-9999   <a href="https://wa.me/5514998088310">Fale Conosco</a></p>
          <p><Mail size={16}/> contato@sporthub.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SportHub. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
