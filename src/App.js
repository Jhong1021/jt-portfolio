// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import ProductGrid from './components/ProductGrid';
import Skills from './components/Skills';
import HeroSection from './components/HeroSection';
import DarkWallpaper from './components/DarkWallpaper';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <ProductGrid />
      <Services />
      <Skills />


      <Footer />
    </div>
  );
}

export default App;
