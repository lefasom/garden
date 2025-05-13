import React, { useState } from "react";
import "./gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const workImages = [
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSEdhVgpODRL1d64rf7qFQe6yGjSxJx497oSZMDpCTAA6BrFeCOnx4riL2u0WY1PMNMF_-PS6tcXDDokLAIpNULVA",
      alt: "Muestra de un jardín terminado y limpio",
    },
    {
      image:
        "https://i.pinimg.com/originals/a4/c9/05/a4c905e2df2aaf28f179f470df3f51b8.jpg",
      alt: "Personal trabajando activamente en mantenimiento de jardín",
    },
    {
      image:
        "https://www.jardineriajorman.com/media/crop/800/500/Listados/servicios/17203091_267088567081991_4972906004257675961_n.jpg",
      alt: "Comparación de jardín antes y después del trabajo",
    },
  ];

  const toolImages = [
    {
      image:
        "https://i5.walmartimages.com/asr/c4e5a9cc-e44d-4b88-b52b-f5498c83f579.002d0d74aa4802df8a73bc9c0daa85e9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      alt: "Cortadora de césped de uso profesional",
    },
    {
      image:
        "https://images.sodimac.com/v3/assets/blt81efde09fd00e46f/blta37cd74723b89fdb/6283db42a4aac35766f2f802/chico-jardin.jpg",
      alt: "Herramientas manuales para jardinería precisa",
    },
    {
      image:
        "https://s1.elespanol.com/2021/08/18/imprescindibles/605200480_200789796_1706x1280.jpg",
      alt: "Equipo de seguridad y herramientas especializadas",
    },
    {
      image:
        "https://www.einhell.com.ar/fileadmin/_processed_/3/c/csm_einhell-garden-further-garden-tools-content_8455610655.jpg",
      alt: "Equipo de seguridad y herramientas especializadas",
    },
  ];

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  const WorkGallery = () => (
    <>
      <h2 className="title">🌱 Galería de Trabajos Realizados</h2>
      <p className="description">
        Vea una muestra de nuestros jardines transformados. Imágenes reales de
        nuestros proyectos antes y después.
      </p>
      <div className="grid2">
        {workImages.map((item, index) => (
          <div
            key={`work-${index}`}
            className="card1"
            onClick={() => openModal(item)}
          >
            <div
              style={{ backgroundImage: `url(${item.image})` }}
              alt={item.alt}
              className="image"
            />
          </div>
        ))}
      </div>
    </>
  );

  const ToolGallery = () => (
    <>
      <h2 className="title">Herramientas y Equipos Profesionales</h2>
      <p className="description">
        Utilizamos maquinaria y herramientas especializadas para asegurar
        calidad y eficiencia en cada servicio.
      </p>
      <div className="grid2">
        {toolImages.map((item, index) => (
          <div
            key={`tool-${index}`}
            className="card1"
            onClick={() => openModal(item)}
          >
            <div
              style={{ backgroundImage: `url(${item.image})` }}
              alt={item.alt}
              className="image"
            />
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="container">
      <ToolGallery />
      <br />
      <br />
      {/* <WorkGallery /> */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              ×
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.alt}
              className="modal-image"
            />
            <p className="modal-caption">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
