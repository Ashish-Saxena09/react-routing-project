import React from "react";
import contactImage from "../assets/contact.jpeg";

export default function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact-content">
          <p id="get">Get In Touch</p>
          <h1 id="let">Let's Build Something</h1>
          <h1 id="great">Great</h1>
          <p id="have">
            Have an idea in mind? Let's discuss your project <br /> and turn
            your vision into reality.
          </p>
        </div>
        <div className="contact-img">
          <img src={contactImage} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="info">
          <h1>Contact Information</h1>
          <p>
            we're here to help you with your next big idea Reach out to us
            anytime.
          </p>
          <p>
            ✉️ Email Us <br /> hello@nexa.com
          </p>
          <p>
            📞 Call Us <br /> +919867687992
          </p>
          <p>
           📍 Our Location <br /> New Delhi, india
          </p>
        </div>
        <div className="form">
          <h1>Send Us a Message</h1>
          <p>
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>
          <h3>Your Name</h3>
          <input type="text" placeholder="Enter your name" />
          <h3>Email Address</h3>
          <input type="email" placeholder="Enter your email" />
          <h3>Subject</h3>
          <input type="text" placeholder="How can we help?" />
          <h3>Your Message</h3>
          <textarea placeholder="Write your Message here"></textarea>
          <button>Send Message →</button>
        </div>
      </div>
    </>
  );
}
