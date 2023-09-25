import React from "react";
import location from "../Svgs/location.svg";
import email from "../Svgs/email.svg";
import linkedin from "../Svgs/linkedin.svg";
import call from "../Svgs/call.svg";
import github from "../Svgs/github-blue.svg";
const Contact = () => {
  return (
    <div className="contact">
      <p className="title">Contact Me</p>
      <div className="contact-container">
        <div className="inside-contact-container">
          <p className="contact-title">Send A Message</p>
          <form className="message-form" action="">
            <input
              type="text"
              className="name contact-inp"
              id="name"
              placeholder="Your Name"
            ></input>
            <input
              type="text"
              className="email contact-inp"
              id="email"
              placeholder="Your Email"
            ></input>
            <textarea
              className="message-box contact-inp"
              id="message-box"
              placeholder="Message"
            ></textarea>
            <button className="contact-button"> Send Message</button>
          </form>
        </div>

        <div className="inside-contact-container">
          <div className="get-in-touch-message">
            <p className="contact-title">Get in Touch</p>
            <p className="in-touch-message">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              dolorum dolorem soluta quidem expedita aperiam aliquid at. Totam
              magni ipsum suscipit amet? Autem nemo esse laboriosam ratione
              nobis mollitia inventore?
            </p>

            <div class="info-container">

              <div className="info">
                <img src={location} className="svgs" />
                <p className="get-in-info"> Street, City </p>
              </div>

              <div className="info">
                <img src={email} className="svgs" />
                <a href="info@gmail.com" className="get-in-info">
                  {" "}
                  info@gmail.com{" "}
                </a>
              </div>

              <div className="info">
                <img src={linkedin} className="svgs" />
                <a href="linkedin.url" className="get-in-info">
                  {" "}
                  linkedin.url{" "}
                </a>
              </div>

              <div className="info">
                <img src={call} className="svgs" />
                <p className="get-in-info"> +123 456 789</p>
              </div>

              <div className="info">
                <img src={github} className="svgs b" />
                <a href="github.com/name" className="get-in-info">
                  {" "}
                  github.com/name{" "}
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
