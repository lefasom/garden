import React from "react";
import "./serviciosJardineria.css";

const ServiciosJardineria = () => {
  const servicios = [
    {
      titulo: "Satisfacción del Cliente",
      descripcion:
        "Nos aseguramos de que cada cliente disfrute de un jardín hermoso y bien cuidado.",
      imagen:
        "https://img.freepik.com/foto-gratis/jardinero-masculino-caucasico-barbudo-atractivo-joven-feliz-camiseta-azul-guantes-sonriendo-sosteniendo-maceta-brote-verde-manos-mirando-lado-expresion-cara-emocionada_176420-19922.jpg", // Reemplaza con la imagen del cliente feliz
    },
    {
      titulo: "Cuidado Ecológico",
      descripcion:
        "Comprometidos con el medio ambiente, usamos métodos ecológicos y sustentables.",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlzTCKgoya_bsNkJuyZVXQ9YqAY_Es7IH7wQ&s", // Reemplaza con el ícono de cuidado ecológico
    },
    {
      titulo: "Equipos Modernos",
      descripcion:
        "Utilizamos equipos de jardinería de última generación para garantizar un trabajo eficiente y de calidad.",
      imagen:
        "https://maquinariadejardineria.com/cdn/shop/files/Desbrozadoras_600x_crop_center.jpg?v=1613748962", // Reemplaza con la imagen de herramientas modernas
    },
  ];

  return (
    <section className="servicios-minimalista">
      <div className="descripcion">
        <h2>Nuestros Principios</h2>
      </div>
      <div className="cuadros-servicios">
        {servicios.map((servicio, index) => (
          <div key={index} className="cuadro-servicio">
            <div
              className="imagen-servicio"
              style={{ backgroundImage: `url(${servicio.imagen})` }}
            >
              <h3>{servicio.titulo}</h3>
            </div>
            <p>{servicio.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiciosJardineria;
