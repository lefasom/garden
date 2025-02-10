import React, { useState } from 'react';
import './header.css';

function Header() {
  const [view, setView] = useState(false);

  const handleContactClick = () => {
    setView(!view);
  };

  return (
    <div>
      <nav>
        <div style={{ backgroundImage: "url('./servicio.png')" }}></div>
      </nav>
      <div className="presentation">
        <div className="img" style={{ backgroundImage: "url('./fondo1.png')" }}></div>
        <article>
          <h2>Transforma tu Jardín</h2>
          <h6>Expertos en diseño y cuidado de espacios verdes. Relájate y deja el trabajo en nuestras manos.</h6>
          <p>¡Nosotros lo hacemos por ti!</p>
          <button onClick={handleContactClick}>Contáctanos</button>
        </article>
      </div>
      <div className="section-div">
        <section></section>
        <section></section>
        <section></section>
      </div>

      {view !== false && (
        <div className="random-number">
          <div className="icon" style={{ backgroundImage: "url('./social.png')" }}></div>
          <div className="icon" style={{ backgroundImage: "url('./whatsapp.png')" }}></div>
        </div>
      )}
    </div>
  );
}

export default Header;
