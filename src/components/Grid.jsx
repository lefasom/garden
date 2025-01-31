import React from 'react'
import './grid.css'
function Grid() {
  return (
<div className="grid">
    <div className="image-container">
        <div className="image" style={{ backgroundImage: "url('fondo3.png')" }}></div>
    </div>
    <div className="image-container">
        <div className="image" style={{ backgroundImage: "url('fondo4.png" }}></div>
    </div>
    <div className="image-container">
        <div className="image" style={{ backgroundImage: "url('fondo2.png" }}></div>
    </div>
    <div className="image-container">
        <div className="image" style={{ backgroundImage: "url('fondo5.png" }}></div>
    </div>
    <div className="image-container">
        <div className="image" style={{ backgroundImage: "url('fondo6.png" }}></div>
    </div>
    <div className="image-container">
        <div className="image" style={{ backgroundImage: "url('fondo7.png" }}></div>
    </div>
</div>



  )
}

export default Grid