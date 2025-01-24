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
import GreyWallpaper from './components/GreyWallpaper';

function App() {
  return (
    <div className="App">
      <Navbar />

      <DarkWallpaper>
        <HeroSection />
      </DarkWallpaper>

      <GreyWallpaper>
        <AboutMe />
      </GreyWallpaper>

      <DarkWallpaper>
        <ProductGrid />
      </DarkWallpaper>

      <GreyWallpaper>
        <Services />
      </GreyWallpaper>

      <DarkWallpaper>
        <Skills />
      </DarkWallpaper>

      <Footer />
    </div>
  );
}

export default App;
