import React from "react";
import ParticlesBackground from "../ParticlesBackground/Test";
// Remove unused imports or variable definitions
import bookImage from '../../assets/images/imagevector.png';  // relative path from hero.js




import "./hero.css"; // Optional for additional custom styling

const Hero = () => {
  console.log("Hero component rendered"); // Debug log  
  return (
    <div className="hero-container row align-items-center g-0">
      <ParticlesBackground />
      <div className="hero-content col  ">
        <div  className="hero row g-0 justify-content-end">
          <div className="col-10">
          <h1 className="first_text">Transforming Your Ideas, </h1>
          <h1 className="second-text"> Our Expertise</h1>
          <div>
            <p >We help you revolutionize your digital presence by designing custom software solutions and crafting marketing strategies that perfectly reflect your needs</p>
          </div>
          <button className="btn two">Start Now</button>
          </div>
        </div>

   
      </div>
      <div className="col">
        <img id="hero-image" src={bookImage} className="img" alt="logo"/>
        

      </div>
    </div>
  );
};

export default Hero;
