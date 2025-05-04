import React, { useState } from 'react';
import './gallery.css'; // Asegúrate de tener este archivo

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const workImages = [
    {
      image: 'https://scontent.fmdz3-1.fna.fbcdn.net/v/t39.30808-6/309502901_424631729798637_5219179633015215940_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=AOBpNr8uv7UQ7kNvwGxjwbR&_nc_oc=AdlRiByefV6hOuVGjsj2hxAzH8lp-dy0yzfqXLvuV6KbFEk-9Rco-jB2RBPjFxwuzm8&_nc_zt=23&_nc_ht=scontent.fmdz3-1.fna&_nc_gid=9-59_jZnPbtLZv3AU9GJ8A&oh=00_AfFsNFeBIQq8M7adhm7Vha16jziH7aiFFAWmrQZOI6JJ0w&oe=681DADE7',
      alt: 'Muestra de un jardín terminado y limpio'
    },
    {
      image: 'http://www.ginerymira.com/blog/wp-content/uploads/2014/07/Trabajos-en-jardinería.jpg',
      alt: 'Personal trabajando activamente en mantenimiento de jardín'
    },
    {
      image: 'https://www.jardineriajorman.com/media/crop/800/500/Listados/servicios/17203091_267088567081991_4972906004257675961_n.jpg',
      alt: 'Comparación de jardín antes y después del trabajo'
    },
    ,
    {
      image: 'https://www.jardineriajorman.com/media/crop/800/500/Listados/servicios/17203091_267088567081991_4972906004257675961_n.jpg',
      alt: 'Comparación de jardín antes y después del trabajo'
    },
  ];

  const toolImages = [
    {
      image: 'https://i5.walmartimages.com/asr/c4e5a9cc-e44d-4b88-b52b-f5498c83f579.002d0d74aa4802df8a73bc9c0daa85e9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
      alt: 'Cortadora de césped de uso profesional'
    },
    {
      image: 'https://images.sodimac.com/v3/assets/blt81efde09fd00e46f/blta37cd74723b89fdb/6283db42a4aac35766f2f802/chico-jardin.jpg',
      alt: 'Herramientas manuales para jardinería precisa'
    },
    {
      image: 'https://www.einhell.com.ar/fileadmin/_processed_/3/c/csm_einhell-garden-further-garden-tools-content_8455610655.jpg',
      alt: 'Equipo de seguridad y herramientas especializadas'
    },
  ];

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="container">
      <h2 className="title">🌱 Galería de Trabajos Realizados</h2>
      <p className="description">
        Vea una muestra de nuestros jardines transformados. Imágenes reales de nuestros proyectos antes y después.
      </p>
      <div className="grid2">
        {workImages.map((item, index) => (
          <div key={`work-${index}`} className="card1" onClick={() => openModal(item)}>
            <img src={item.image} alt={item.alt} className="image" />
          </div>
        ))}
      </div>

      <h2 className="title">🛠️ Herramientas y Equipos Profesionales</h2>
      <p className="description">
        Utilizamos maquinaria y herramientas especializadas para asegurar calidad y eficiencia en cada servicio.
      </p>
      <div className="grid2">
        {toolImages.map((item, index) => (
          <div key={`tool-${index}`} className="card1" onClick={() => openModal(item)}>
            <img src={item.image} alt={item.alt} className="image" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <img src={selectedImage.image} alt={selectedImage.alt} className="modal-image" />
            <p className="modal-caption">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
