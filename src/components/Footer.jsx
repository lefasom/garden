import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-section">
      <div className="contact-info">
        <div className="contact-item">
          <div>
            <h3>
              <span>Zonas de trabajo</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#fff"
              >
                <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
              </svg>
            </h3>
            <p>Jardinería Echegaray</p>
            <p>Regiones: Al Quoz, Colorado, USA</p>
            <p>Barrios:</p>
            <ul className="barrios-list">
              <li>Al Quoz Industrial</li>
              <li>Meadow Springs</li>
              <li>Northwood Hills</li>
              <li>Golden Valley</li>
              <li>River Park</li>
              <li>Westwood Grove</li>
              <li>Greenfield</li>
              <li>Southgate Heights</li>
              <li>Pine Hill</li>
              <li>Sunset Ridge</li>
            </ul>
          </div>
        </div>
        <div className="contact-item">
          <div>
            <h3>
              <span>Contacto</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#fff"
              >
                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
              </svg>
            </h3>
            <p>Teléfono: +54 9 2613 01-3869</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p> Todos los derechos reservados - Jardinería Echegaray 2025®.</p>
        <p>
          Sitio web creado por <a href="https://github.com/lefasom">Lefasom</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
