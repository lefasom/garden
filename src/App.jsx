import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Grid from './components/Grid'
import GardeningServicesGrid from './components/GardeningServicesGrid'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Grid/>
     <GardeningServicesGrid/>
    <Footer/>
    </>
  )
}

export default App
