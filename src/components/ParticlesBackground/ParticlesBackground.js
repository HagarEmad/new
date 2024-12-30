// import React from "react";
// import Particles from "@tsparticles/react";
// import { loadFull } from "tsparticles";

// import "./ParticlesBackground.css";

// const Hero = () => {
//   const particlesInit = async (main) => {
//     console.log("particlesInit");
//     await loadFull(main);
//   };

//   const particlesOptions = {
//     fullScreen: {
//       enable: false, // Prevent particles from covering the full screen
//     },
//     particles: {
//       number: {
//         value: 80,
//         density: {
//           enable: true, 
//           value_area: 800,
//         },
//       },
//       color: {
//         value: "8c4d60",
//       },
//       shape: {
//         type: "circle",
//       },
//       opacity: {
//         value: 0.5,
//         random: true,
//       },
//       size: {
//         value: 3,
//         random: true,
//       },
//       move: {
//         enable: true,
//         speed: 3,
//         direction: "none",
//         random: false,
//         straight: false,
//         out_mode: "out",
//         bounce: false,
//       },
//     },
//     interactivity: {
//       events: {
//         onhover: {
//           enable: true,
//           mode: "repulse",
//         },
//       },
//     },
//   };

//   return (
//     <div
//       style={{
//         position: "relative",
//         height: "100vh", // Ensure Hero section takes the full viewport height
//         display: "flex", // Use flexbox to center content
//         justifyContent: "center", // Center content horizontally
//         alignItems: "center", // Center content vertically
//         overflow: "hidden", // Ensure no overflow of content
//       }}
//     >
//       {/* Particles Component */}
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         options={particlesOptions}
//         style={{
//           position: "absolute", // Absolute positioning to sit behind content
//           top: 0,
//           left: 0,
//           width: "100%", // Full width of parent
//           height: "100px !important", // Explicitly set height to 100px
//           zIndex: -1, // Keep particles behind text
//         }}
//       />

//       {/* Content */}
//       {/* <div
//         style={{
//           position: "relative",
//           color: "#fff",
//           textAlign: "center",
//           zIndex: 1, // Ensure content sits above particles
//         }}
//       >
//         <h1>Your Vision, Our Expertise</h1>
//         <p>Experience the particles effect in the background!</p>
//       </div> */}
//     </div>
//   );
// };

// export default Hero;
