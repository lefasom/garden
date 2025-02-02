import React, { useEffect, useRef } from 'react';
import './interior.css'; // Importa el archivo CSS

const InteriorDesignGrid = () => {
  const projects = [
    { title: '475 Tenth Avenue', headline: 'Sample Headline' },
    { title: 'Big Sky Residence', headline: 'Sample Headline' },
    { title: 'Hotel Singapore', headline: 'Sample Headline' },
    { title: 'Home Office', headline: 'Sample Headline' },
    { title: 'Apartments Space', headline: 'Sample Headline' },
    { title: 'Apartment Neoclassic', headline: 'Sample Headline' },
    { title: 'Apartment 34', headline: 'Sample Headline' },
    { title: 'Luxurious Home', headline: 'Sample Headline' },
  ];

  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible'); // Elimina la clase si no está visible
          }
        });
      },
      { threshold: 0.1 } // Ajusta para definir cuándo el elemento está visible
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="container">
      <h2 className="title">Complete Interior Design Service</h2>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className="grid2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card"
            ref={(el) => cardRefs.current.push(el)}
          >
            <img src="./fondo1.png" alt={project.title} className="image2" />
            <h3 className="project-title">{project.title}</h3>
            <p className="headline">{project.headline}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteriorDesignGrid;
