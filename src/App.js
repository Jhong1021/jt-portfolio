// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import ProductGrid from './components/ProductGrid';
// import Landing from './components/Landing';
import BackgroundWrapper from './components/BackgroundWrapper';
import Skills from './components/Skills';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <BackgroundWrapper>
        {/* <Landing /> */}
        <AboutMe />
        <ProductGrid />
        <Services />
        <Skills />
      </BackgroundWrapper>
      <Footer />

    </div>
  );
}

export default App;
