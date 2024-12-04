import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import Home from "./components/Home";
import Research from "./components/Research";
import Team from "./components/Team";
import Publications from "./components/Publications";
import Teaching from "./components/Teaching";
import Contact from "./components/Contact";
import Header, { useActiveState } from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const { active, handleSelect } = useActiveState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imgs = [
      'https://raw.githubusercontent.com/RISE-Crystals/RISE-Crystals.github.io/main/src/images/pfp.jpg',
      'https://raw.githubusercontent.com/RISE-Crystals/RISE-Crystals.github.io/main/src/images/rb.jpeg',
      'https://raw.githubusercontent.com/RISE-Crystals/RISE-Crystals.github.io/main/src/images/nm.jpeg',
      'https://raw.githubusercontent.com/RISE-Crystals/RISE-Crystals.github.io/main/src/images/pj.jpeg',
      'https://raw.githubusercontent.com/RISE-Crystals/RISE-Crystals.github.io/main/src/images/bmd.png',
      'https://raw.githubusercontent.com/RISE-Crystals/RISE-Crystals.github.io/main/src/images/mlff.png',
      'https://raw.githubusercontent.com/RISE-Crystals/RISE-Crystals.github.io/main/src/images/mlnn.webp',
      'https://raw.githubusercontent.com/RISE-Crystals/RISE-Crystals.github.io/main/src/images/esc.png',
      'https://raw.githubusercontent.com/RISE-Crystals/RISE-Crystals.github.io/main/src/images/rds.png',
      'https://raw.githubusercontent.com/RISE-Crystals/RISE-Crystals.github.io/main/src/images/car1.png',
      'https://raw.githubusercontent.com/RISE-Crystals/RISE-Crystals.github.io/main/src/images/car2.png',
      'https://raw.githubusercontent.com/RISE-Crystals/RISE-Crystals.github.io/main/src/images/car3.png',
      'https://raw.githubusercontent.com/RISE-Crystals/RISE-Crystals.github.io/main/src/images/car4.png',
      'https://raw.githubusercontent.com/RISE-Crystals/RISE-Crystals.github.io/main/src/images/car5.png',
      'https://raw.githubusercontent.com/RISE-Crystals/RISE-Crystals.github.io/main/src/images/car6.png',
      'https://raw.githubusercontent.com/RISE-Crystals/RISE-Crystals.github.io/main/src/images/car7.png',
      'https://raw.githubusercontent.com/RISE-Crystals/RISE-Crystals.github.io/main/src/images/car8.png'
    ];

    cacheImages(imgs);
  }, []);

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();

        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });

    try {
      await Promise.all(promises);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to load images", error);
    }
  };

  return (
    <div>
      <Header active={active} handleSelect={handleSelect} />
      {isLoading ? (
        <div className="spinner-container">
          <Spinner className="spinner" />
        </div>
      ) : (
        <Container>
          {active === "home" && <Home />}
          {active === "research" && <Research />}
          {active === "team" && <Team />}
          {active === "publications" && <Publications />}
          {active === "teaching" && <Teaching />}
          {active === "contact" && <Contact />}
        </Container>
      )}
      <Footer/>
    </div>
  );
}

export default App;
