import { Layout } from "./components/shared/Layout"
import { Hero } from "./components/sections/Hero";
import { Navbar } from "./components/elements/Navbar";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { Shop } from "./components/sections/Shop";
import { Classics } from "./components/sections/Classics";
import { Disclaimer } from "./components/sections/Disclaimer";

function App() { 
    useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);
    return <Layout title="Nike">
      <Navbar />
      <Hero />
      <Shop />
      <Classics />
      <Disclaimer />
      </Layout>;
    
}

export default App
