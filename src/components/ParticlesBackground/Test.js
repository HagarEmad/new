import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(() => ({
    fullScreen: { enable: true }, // Enable full screen mode for the particles
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
      move: { enable: true, speed: 6 },
      number: { value: 80 },
    },
    detectRetina: true,
  }), []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",  // Ensure parent div fills the viewport
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
            width: "100vw",  // Set width to 100vw to fill the full width of the viewport
            height: "100vh",  // Set height to 100vh to fill the full height of the viewport
            zIndex: -1,
          }}
        />
      )}
    </div>
  );
};

export default ParticlesBackground;
