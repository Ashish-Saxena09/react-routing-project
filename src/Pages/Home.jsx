import React from "react";
import laptopImage from "../assets/image.jpg";

export default function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <p id="build">Build Better Grow Faster.</p>
        <h1 id="turn">Turn Your Ideas Into</h1>
        <h1 id="amazing">Amazing Products</h1>
        <p id="nexa">
          Nexa helps you build modern, fast and scalable web <br />
          applications. Get started today and bring your vision <br /> to life
          with ease.
        </p>
        <div className="btn">
          <button id="btn1">Get Started →</button>
          <button id="btn2">Learn More</button>
        </div>
      </div>
      <div className="img">
        <img src={laptopImage} alt="Ai image" />
      </div>
    </div>
  );
}
