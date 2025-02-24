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

      <DarkWallpaper>
        <HeroSection />
      </DarkWallpaper>

      <DarkWallpaper>
        <AboutMe />
      </DarkWallpaper>

      <DarkWallpaper>
        <ProductGrid />
      </DarkWallpaper>

      <DarkWallpaper>
        <Services />
      </DarkWallpaper>

      <DarkWallpaper>
        <Skills />
      </DarkWallpaper>

      <Footer />
    </div>
  );
}

export default App;
