import React from "react";
import Hero from "../../components/hero/hero";
import "./home.css";
import Services from "../../components/our_services_section/services";
const Home = () => {
  console.log("home component rendered");
  // console.log("Current viewport width: " + window.innerWidth + "px");

 // Debug log
  return (
    <div >
      <Hero/>
      {/* <div className="hero-content">
        <h1 >Transforming Your Ideas, Our </h1>
        <h1>Expertise</h1>
        {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      {/* </div> */} 
 
      {/* <div className=" hh bg-light container-fluid" >hii</div> */}
      <Services/>

    </div>
  );
};

export default Home;