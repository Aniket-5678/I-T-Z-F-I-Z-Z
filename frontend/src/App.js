
import { useEffect, useRef } from "react";
import "./App.css";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import ServiceDetails from "./components/ServiceDetails";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MouseFollower from "./components/MouseFollower";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
    });

    lenisRef.current = lenis;

    // Connect Lenis scroll with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // GSAP ticker
    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);

    // Prevent GSAP ticker lag smoothing from interfering with Lenis
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <BrowserRouter>
     <MouseFollower />
      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <main className="bg-[#080808]">
              <Navbar />
              <Hero />
              <Services />
              <About />
              <Contact />
              <Footer />
            </main>
          }
        />

        {/* SERVICE DETAILS PAGE */}
        <Route
          path="/services/:slug"
          element={<ServiceDetails />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

