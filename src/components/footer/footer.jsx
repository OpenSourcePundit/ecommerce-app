import {
    AiOutlineInstagram,
    AiFillGithub,
    AiFillLinkedin,
  } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import "./footer.css"

export function Footer(){
    return(
      <footer className="footer">
        <div className="footer-section">
          <div className="footer-left-section">
            <h2> BibLiotec</h2>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
          <div className="contact-section">
            <h3>Lets Chat!</h3>
            <div className="contact">
              <a href="https://www.facebook.com/" target="blank" >
                <BsFacebook />
              </a>
              <a href="https://www.linkedin.com/" target="blank">
                <AiFillLinkedin />
              </a>
              <a href="https://www.instagram.com" target="blank">
                <AiOutlineInstagram />
              </a>
              <a href="https://github.com/OpenSourcePundit" target="blank">
                <AiFillGithub />
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }