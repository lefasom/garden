import React, { useState } from "react";
import "./header.css";

function Header() {
  const [view, setView] = useState(false);

  const handleContactClick = () => {
    setView(!view);
  };

  return (
    <div>
      <nav>
        <div style={{ backgroundImage: "url('./campo.png')" }}></div>
      </nav>
      <div className="presentation">
        <div
          className="img"
          style={{ backgroundImage: "url('./fondo1.png')" }}
        ></div>
        <article>
          <h2>Transforma tu Jardín</h2>
          <h6>
            Expertos en diseño y cuidado de espacios verdes. Relájate y deja el
            trabajo en nuestras manos.
          </h6>
          <p>¡Nosotros lo hacemos por ti!</p>
          <button onClick={handleContactClick}>Contáctanos</button>
        </article>
      </div>
      <div className="section-div">
        <section></section>
        <section></section>
        <section></section>
      </div>

      {/* Mostrar íconos con animación */}
      <div className={`random-number ${view ? "show" : ""}`}>
        <div
          className="icon"
          style={{ backgroundImage: "url('./social.png')" }}
        ></div>
        <a
          href="https://wa.me/2613013869?text=Hola,%20vengo%20de%20Campo%20Premium%20-%20web.%20Quisiera%20consultarte%20sobre%20un%20presupuesto%20para%20mi%20jardín."
          className="icon"
          style={{ backgroundImage: "url('./whatsapp.png')" }}
        ></a>
      </div>
    </div>
  );
}

export default Header;
