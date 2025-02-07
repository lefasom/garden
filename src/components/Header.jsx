import React from 'react'
import './header.css'
function Header() {
  return (
    <div>
      <nav>
        <div style={{ backgroundImage: "url('./servicio.png')" }}></div>

      </nav>
      <div className='presentation'>
        <div className="img" style={{ backgroundImage: "url('./fondo1.png')" }}></div>
        <article>
          <h2>Transforma tu Jardín</h2>
          <h6>Expertos en diseño y cuidado de espacios verdes. Relájate y deja el trabajo en nuestras manos.</h6>
          <p>¡Nosotros lo hacemos por ti!</p>
          <button>Descubre más</button>
        </article>

      </div>
      <div className='section-div'>
        <section>

        </section>
        <section>

        </section>
        <section>

        </section>
      </div>

    </div>
  )
}

export default Header