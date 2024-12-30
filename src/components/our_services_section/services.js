import React from "react";
import "./services.css";

const Services = () => {
  return (
    <div className="containerr">  

      <div className="d-flex justify-content-center">
        <h1>Our Services</h1>
      </div>
      <div className="box-container ">
     
        <div className="box-item  ">
          <div className="flip-box">
            <div
              className="flip-box-front text-center"
              style={{
              
                backgroundImage: `url(${require('../../assets/images/website.jpg')})`,
                backgroundColor: "rgb(15 2 15 / 69%)", // Semi-transparent blue
                backgroundBlendMode: "overlay",
  

              }}
            >
              <div className="inner color-white">
                <h3 className="flip-box-header">Websites App</h3>
                <p>Design and deploy websites tailored to your needs.</p>
                <img
                  src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                  alt=""
                  className="flip-box-img"
                />
              </div>
            </div>
            <div
              className="flip-box-back text-center"
              style={{
                backgroundImage: `url(${require('../../assets/images/website.jpg')})`,
                backgroundColor: "rgb(15 2 15 / 69%)", // Semi-transparent blue
                backgroundBlendMode: "overlay",
              }}
            >
              <div className="inner color-white">
                <h3 className="flip-box-header">Websites App</h3>
                <p>Design and deploy websites tailored to your needs.</p>
                <button className="flip-box-button">Learn More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="box-item">
          <div className="flip-box">
            <div
              className="flip-box-front text-center"
              style={{
                backgroundImage: `url(${require('../../assets/images/mobileeapps.jpg')})`,
                backgroundColor: "rgb(11 25 50 / 87%)", // Semi-transparent blue
                backgroundBlendMode: "overlay",
              }}
            >
              <div className="inner color-white">
                <h3 className="flip-box-header">Mobile Apps</h3>
                <p>Build powerful and engaging mobile applications.</p>
                <img
                  src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                  alt=""
                  className="flip-box-img"
                />
              </div>
            </div>
            <div
              className="flip-box-back text-center"
              style={{
                backgroundImage: `url(${require('../../assets/images/mobileeapps.jpg')})`,
                backgroundColor: "rgb(11 25 50 / 87%)", // Semi-transparent blue
                backgroundBlendMode: "overlay",
              }}
            >
              <div className="inner color-white">
                <h3 className="flip-box-header">Mobile Apps</h3>
                <p>Build powerful and engaging mobile applications.</p>
                <button className="flip-box-button">Learn More</button>
              </div>
            </div>
          </div>
        </div>
         <div className="box-item">
          <div className="flip-box">
            <div
              className="flip-box-front text-center"
              style={{
                backgroundImage: `url(${require('../../assets/images/desktop.jpg')})`,
              backgroundColor: "rgb(15 2 15 / 69%)", // Semi-transparent blue
              backgroundBlendMode: "overlay",

        
              }}
            >
              <div className="inner color-white">
                <h3 className="flip-box-header">Desktop Apps</h3>
                <p>Craft reliable, secure, and scalable desktop software.</p>
                <img
                  src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                  alt=""
                  className="flip-box-img"
                />
              </div>
            </div>
            <div
              className="flip-box-back text-center"
              style={{
                backgroundImage: `url(${require('../../assets/images/desktop.jpg')})`,
              backgroundColor: "rgb(15 2 15 / 69%)", // Semi-transparent blue
              backgroundBlendMode: "overlay",
              }}
            >
              <div className="inner color-white">
                <h3 className="flip-box-header">Desktop Apps</h3>
                <p>Craft reliable, secure, and scalable desktop software.</p>
                <button className="flip-box-button">Learn More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="box-item">
          <div className="flip-box">
            <div
              className="flip-box-front text-center"
              style={{
                backgroundImage:
                  "url('https://s25.postimg.cc/l2q9ujy4f/cta-4.png')",
              }}
            >
              <div className="inner color-white">
                <h3 className="flip-box-header">Marketing</h3>
                <p>Enhance customer loyalty through digital marketing.</p>
                <img
                  src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                  alt=""
                  className="flip-box-img"
                />
              </div>
            </div>
            
            <div
              className="flip-box-back text-center"
              style={{
                backgroundImage:
                  "url('https://s25.postimg.cc/l2q9ujy4f/cta-4.png')",
              }}
            >
              <div className="inner color-white">
                <h3 className="flip-box-header">Marketing</h3>
                <p>Enhance customer loyalty through digital marketing.</p>
                <button className="flip-box-button">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
