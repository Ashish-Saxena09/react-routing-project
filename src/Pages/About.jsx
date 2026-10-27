import React from "react";
import laptopImage from "../assets/image.jpg";

export default function About() {
  return (
    <>
      <div className="about">
        <div className="about-content">
          <p id="about">About Nexa</p>
          <h1>
            We're Building a <br /> <span>Better Web Together</span>
          </h1>
          <p>
            Nexa is a modern web development platform created to help <br />
            individuals and businesses turn their ideas into powerful, <br />
            scalable and beautiful web applications.
          </p>
          <button>Our mission →</button>
        </div>
        <div className="about-img">
          <img src={laptopImage} alt="Laptop image" />
        </div>
      </div>
      <div className="acheivement">
        <p>
          <h3>100+</h3> <br /> Projects Completed
        </p>
        <p>
          <h3>50+</h3> <br /> Happy Clients
        </p>
        <p>
          <h3>3+</h3> <br /> Years of Experience
        </p>
        <p>
          <h3>24/7</h3> <br /> Support & Maintenance
        </p>
      </div>
    </>
  );
}
