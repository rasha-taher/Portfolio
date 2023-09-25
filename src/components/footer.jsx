import location from "../Svgs/location-white.svg";
import call from "../Svgs/call-white.svg";
import email from "../Svgs/email-white.svg";
import linkedin from"../Svgs/linkedin-white.svg"
import github from "../Svgs/github-white.svg"
const Footer = () => {
    return (
        <footer>
              <div className="div1">
            <div className="footer-container">
                <p className="footer-titles"> About</p>
                <div className="info info1">
                <img src={location} className="svgs" />
                <p className="get-in-info"> Street, City </p>
              </div>
              <div className="info info1">
                <img src={email} className="svgs" />
                <a href="info@gmail.com" className="get-in-info">
                  {" "}
                  info@gmail.com{" "}
                </a>
              </div>
              <div className="info info1">
                <img src={call} className="svgs" />
                <p className="get-in-info"> +123 456 789</p>
              </div>
            </div>
          
            <div className="footer-container">
            <p className="footer-titles">Information</p>
                <ul className="information-ul">
                    <li className="information-li"><a href="">About Me</a></li>
                    <li className="information-li"><a href="">Skills</a></li>
                    <li className="information-li"><a href="">Project</a></li>
                    <li className="information-li"><a href="">Contact</a></li>
                </ul>
            </div>
            </div>
            <div >
            <div className="footer-container f1">
            <p className="footer-titles"> Social Links</p>
            <div className="social-container">
            <img src={email} className="svgs s1 " />
            <img src={linkedin} className="svgs foot-svg" />
            <img src={github} className="svgs foot-svg" />
            </div>
            </div>

            </div>
            
        </footer>
    )
}

export default Footer;