import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Grid from './components/Grid'
import InteriorDesignGrid from './components/InteriorDesignGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Grid/>
     <InteriorDesignGrid/>
    </>
  )
}

export default App
