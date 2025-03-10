import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import ProductGrid from "./components/ProductGrid";
import Skills from "./components/Skills";
import HeroSection from "./components/HeroSection";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Display loading screen for 3 seconds before showing the main content
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <AboutMe />
          <ProductGrid />
          <Services />
          <Skills />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
