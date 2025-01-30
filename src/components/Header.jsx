import React from 'react'
import './header.css'
function Header() {
  return (
    <div>
      <nav></nav>
      <div className='presentation'>
      <div className="img" style={{ backgroundImage: "url('./fondo1.png')" }}></div>

        <article>
          <h2>Design Your Home, Your Way</h2>
          <h6>Habitant morbi tristique senectus et. Nec dui nunc mattis enim ut tellus. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. </h6>
          <p>Image from </p>
          <button> view more</button>
        </article>
      </div>
      <section>
        <h3>Build Gre​at Products</h3>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
      </section>
    </div>
  )
}

export default Header