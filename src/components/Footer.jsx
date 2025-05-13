import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-column">
          <h3>🌿 Jardinería - Campo Premium</h3>
          <p>
            Transformamos espacios verdes con pasión y compromiso. Servicios
            personalizados para hogares y empresas.
          </p>
        </div>

        <div class="footer-column">
          <h3>📍 Zonas de trabajo</h3>
          <ul>
            <li>• Agrelo</li>
            <li>• Cacheuta</li>
            <li>• Carrodilla</li>
            <li>• Chacras de Coria</li>
            <li>• El Carrizal</li>
            <li>• Las Compuertas</li>
            <li>• Mayor Drummond</li>
            <li>• Ugarteche</li>
            <li>• Vistalba</li>
            <li>• Vertientes del Pedemonte</li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>📞 Contacto</h3>
          <ul>
            <li>
              <strong>Teléfono:</strong> +54 9 2613 01-3869
            </li>
            <li>
              <strong>Email:</strong> contacto@ejemplo.com
            </li>
            <li>
              <strong>Web:</strong>{" "}
              <a href="https://github.com/lefasom" target="_blank">
                Sitio por Lefasom
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        © 2025 Jardinería 🌿 Campo Premium — Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
