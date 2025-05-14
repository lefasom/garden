import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import GardeningServicesGrid from "./components/GardeningServicesGrid";
import Footer from "./components/Footer";
import ServiciosJardineria from "./components/ServiciosJardineria";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Gallery from "./components/Gallery";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ScrollToTopButton />
      <Header />
      <GardeningServicesGrid />
      <ServiciosJardineria />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
