import React from 'react'
import './header.css'
function Header() {
  return (
    <div>
      <nav></nav>
      <div className='presentation'>
        <img src="https://gf-paysagiste.fr/wp-content/uploads/2024/01/jardin-ecolo.jpg" alt="" />
        <article>
          <h2>Design Your Home, Your Way</h2>
          <h6>Habitant morbi tristique senectus et. Nec dui nunc mattis enim ut tellus. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. </h6>
          <p>Image from </p>
          <button> view more</button>
        </article>
      </div>
    </div>
  )
}

export default Header