import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";



import "./ParticlesBackground.css";



const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Update screen size check
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  // Define particle options
  const options = useMemo(() => ({
    fullScreen: { enable: true },
    background: { color: { value: "#0d47a1" } },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.5, width: 1 },
      move: { enable: true, speed: isSmallScreen ? 4 : 6 },  // Adjust speed based on screen size
      number: { value: isSmallScreen ? 40 : 80 },            // Adjust number of particles based on screen size
    },
    detectRetina: true,
  }), [isSmallScreen]);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",  // Full height of viewport
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      {init && (
        <Particles
          id="tsparticles"
          options={options}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",  // Full width of viewport
            height: "100vh",  // Full height of viewport
            zIndex: -1,
          }}
        />
      )}
    </div>
  );
};

export default ParticlesBackground;



