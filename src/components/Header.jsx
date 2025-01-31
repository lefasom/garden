import React from 'react'
import './header.css'
function Header() {
  return (
    <div>
      <nav></nav>
      <div className='presentation'>
      <div className="img" style={{ backgroundImage: "url('./fondo1.png')" }}></div>

        <article>
          <h2>Crea el Jardín de Tus Sueños</h2>
          <h6>Nos especializamos en la creación, mantenimiento y embellecimiento de jardines. Con nuestro equipo de expertos, tu espacio verde siempre lucirá impecable. Disfruta de la naturaleza en su máxima expresión sin preocuparte por el mantenimiento. ¡Deja que nosotros nos encarguemos de todo! </h6>
          <button>Conoce Más</button>
        </article>
      </div>
      <section>
        <h3>Servicios de Jardinería Profesional</h3>
        <p>
        Ofrecemos una amplia gama de servicios que incluyen corte de césped, poda de árboles, diseño de jardines y más. Nuestra misión es brindarte un espacio verde que sea funcional y hermoso, utilizando las mejores técnicas de jardinería.
        </p>
      </section>
    </div>
  )
}

export default Header