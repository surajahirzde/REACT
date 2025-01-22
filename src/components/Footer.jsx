import "./styles/footer.css";
import { DiSmashingMagazine } from "react-icons/di";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="left">
          <div className="icon">
            <DiSmashingMagazine />
            <span>URAJ YADAV</span>
          </div>

          <p>
            Believe in quality over quantity <br />
            We give our best{" "}
          </p>
        </div>

        <div className="right">
          <div className="icon">
            <a
              href="https://m.facebook.com/surajyadav.yadav.71697/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiFacebookBoxLine />
            </a>

            <a
              href="https://twitter.com/SurajYa71961540"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.instagram.com/surajahirzde"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineGoogle />
            </a>
          </div>
        </div>
      </div>
      <p> Copyright © 2023 SURAJ YADAV</p>
    </div>
  );
};

export default Footer;
