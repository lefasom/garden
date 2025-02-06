import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import GardeningServicesGrid from './components/GardeningServicesGrid'
import Footer from './components/Footer'
import ServiciosJardineria from './components/ServiciosJardineria'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
    <ServiciosJardineria/>
     <GardeningServicesGrid/>
    <Footer/>
    </>
  )
}

export default App
