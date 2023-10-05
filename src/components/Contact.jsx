import location from "../Svgs/location.svg";
import mail from "../Svgs/email.svg";
import linkedin from "../Svgs/linkedin.svg";
import call from "../Svgs/call.svg";
import github from "../Svgs/github-blue.svg";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleAddEmail = async () => {
    const emailBody = { name, email, message };
    console.log(emailBody);
    try {
      const response = await fetch("http://localhost:5000/emails/addEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailBody),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        window.alert("Message sent successfully!");
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("Error sending message. Please try again later.");
    }
  };

  return (
    <div id="contact">
      <div>
        <p className="title">Contact Me</p>
      </div>
      <div className="contact-container">
        <div className="inside-contact-container">
          <div className="message-form" action="">
            <p className="contact-title">Send A Message</p>
            <div className="text">
              <input
                type="text"
                className="name contact-inp"
                id="name"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
              ></input>
              <input
                type="text"
                className="email contact-inp"
                id="email"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <textarea
                className="message-box contact-inp"
                id="message-box"
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <br />
              <button className="contact-button" onClick={handleAddEmail}>
                {" "}
                Send Message
              </button>
            </div>
          </div>
        </div>
        <div className="inside-contact-container">
          <div className="get-in-touch-message">
            <p className="contact-title">Get in Touch</p>
            <div className="text">
              <p className="in-touch-message">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolorum dolorem soluta quidem expedita aperiam aliquid at. Totam
                magni ipsum suscipit amet? Autem nemo esse laboriosam ratione
                nobis mollitia inventore?
              </p>

              <div class="info-container">
                <div className="info">
                  <img src={location} className="svgs" />
                  <p className="get-in-info"> Beirut, Lebanon </p>
                </div>

                <div className="info">
                  <img src={mail} className="svgs" />
                  <a
                    href="mailto:dev.shantkel@gmail.com"
                    className="get-in-info"
                  >
                    dev.shantkel@gmail.com
                  </a>
                </div>

                <div className="info">
                  <img src={linkedin} className="svgs" />
                  <a
                    href="https://www.linkedin.com/in/shant-kel-khacherian-24066a268/"
                    className="get-in-info"
                  >
                    linkedin.com/shant-kel-khacherian
                  </a>
                </div>

                <div className="info">
                  <img src={call} className="svgs" />
                  <p className="get-in-info"> +961 71 729 503</p>
                </div>

                <div className="info">
                  <img src={github} className="svgs b" />
                  <a
                    href="https://github.com/shantk705"
                    className="get-in-info"
                  >
                    github.com/shantk705
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
