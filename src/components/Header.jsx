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
          <h2>Crea el Jardín de Tus Sueños</h2>
          <h6>Nos especializamos en la creación, mantenimiento y embellecimiento de jardines. Con nuestro equipo de expertos, tu espacio verde siempre lucirá impecable. Disfruta de la naturaleza en su máxima expresión sin preocuparte por el mantenimiento.</h6>
          <p> ¡Deja que nosotros nos encarguemos de todo!</p>
          <button>Conoce Más</button>
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