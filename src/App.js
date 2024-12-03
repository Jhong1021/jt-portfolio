// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import ProductGrid from './components/ProductGrid';
import Landing from './components/Landing';
import BackgroundWrapper from './components/BackgroundWrapper';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BackgroundWrapper>
        {/* <Home /> */}
        <Landing />
        <ProductGrid />
        <AboutMe />
        <Services />
        <Skills />
      </BackgroundWrapper>

    </div>
  );
}

export default App;
