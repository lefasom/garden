import React, { useEffect, useRef } from 'react';
import './gardeningServicesGrid.css'; // Importa el archivo CSS

const GardeningServicesGrid = () => {
  const services = [
    { title: 'Poda de Césped', headline: 'Mantenimiento regular y corte uniforme del césped para un jardín impecable.', image: 'https://static.wixstatic.com/media/aca292_a618764546e64f128dd2c22bb048634d~mv2.jpg/v1/fill/w_560,h_374,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SEPTIEMBRE%202.jpg' },
    { title: 'Poda de Arbustos', headline: 'Damos forma a sus arbustos para un crecimiento estético y saludable.', image: 'https://tupiscinayjardin.com/cdn/shop/articles/poda1-1024x351_1212x.jpg?v=1698755008' },
    { title: 'Poda de Árboles', headline: 'Podamos árboles para mantenerlos fuertes y saludables.', image: 'https://http2.mlstatic.com/D_NQ_NP_707313-MLA79926765924_102024-O.webp' },
    { title: 'Diseño de Jardines', headline: 'Transformamos su espacio en un jardín hermoso y funcional.', image: 'https://www.eluniverso.com/resizer/v2/O6HSN7KEZFAOJC4VZYUI6ZYPNU.png?auth=35553b0e7288925feb1b9025f7c9c28267cdb0f9d11350f35fd73c1c255bdf71&width=893&height=670&quality=75&smart=true' },
    { title: 'Control de Plagas', headline: 'Protección eficaz contra plagas para mantener su jardín saludable.', image: 'https://ecoplag.com.co/wp-content/uploads/2016/07/trampas_control_plagas_ecoplag.jpg' },
    { title: 'Mantenimiento de Piscina ', headline: 'Servicios de limpieza y mantenimiento.', image: 'https://gardenexpress.cl/wp-content/uploads/2023/05/pasto-sintetico-para-piscinas2.jpg' },
    { title: 'Abonado y Fertilización', headline: 'Aplicamos nutrientes para mejorar la salud de su jardín.', image: 'https://www.hola.com/horizon/original_aspect_ratio/8af80be02d00-abono-plantas-jardin-4-a.jpg' },
    { title: 'Mantenimiento Integral', headline: 'Servicios de cuidado completo para todas sus áreas verdes.', image: 'https://atcmantenimientos.com/wp-content/uploads/2014/03/atc-mantenimentos-comunidades-800x490.jpg' },
  ];

  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
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
      <h2 className="title card" ref={(el) => cardRefs.current.push(el)}>
        Servicios Profesionales de Jardinería
      </h2>
      <p className="description card" ref={(el) => cardRefs.current.push(el)}>
        Ofrecemos una amplia gama de servicios de jardinería profesional, incluyendo poda de césped, arbustos y árboles, control de plagas, y mucho más para mantener su jardín en perfectas condiciones durante todo el año.
      </p>
      <div className="grid2">
        {services.map((service, index) => (
          <div
            key={index}
            className="card"
            ref={(el) => cardRefs.current.push(el)}
          >
            <div
              style={{ backgroundImage: `url(${service.image})` }}
              className="image2"
            ></div>
            <h3 className="project-title">{service.title}</h3>
            <p className="headline">{service.headline}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GardeningServicesGrid;
