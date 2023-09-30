import location from "../Svgs/location-white.svg";
import call from "../Svgs/call-white.svg";
import email from "../Svgs/email-white.svg";
import linkedin from"../Svgs/linkedin-white.svg"
import github from "../Svgs/github-white.svg"
const Footer = () => {
    return (
        <footer>
          
            <div className="footer-container">
                <p className="footer-titles"> About</p>
                <div className="big-div-info">
                <div className="info info1">
                <img src={location} className="svgs" />
                <p className="get-in-info">Beirut, Lebanon </p>
              </div>
              <div className="info info1">
                <img src={email} className="svgs" />
                <a href="mailto:dev.shantkel@gmail.comm" className="get-in-info">
              dev.shantkel@gmail.com
                </a>
              </div>
              <div className="info info1">
                <img src={call} className="svgs" />
                <p className="get-in-info"> +961 71 729 503</p>
              </div>
            </div>
            </div>
          
            <div className="footer-container">
            <p className="footer-titles">Information</p>
                <ul className="information-ul">
                    <li className="information-li"><a href="#about">About Me</a></li>
                    <li className="information-li"><a href="#skill">Skills</a></li>
                    <li className="information-li"><a href="#project">Projects</a></li>
                    <li className="information-li"><a href="#contact">Contact</a></li>
                </ul>
            </div>
            
            
            <div className="footer-container f1">
            <p className="footer-titles"> Social Links</p>
            <div className="social-container">
            <img src={email} className="svgs s1 " />
            <img src={linkedin} className="svgs foot-svg" />
            <img src={github} className="svgs foot-svg" />
            </div>
            

            </div>
            
        </footer>
    )
}

export default Footer;