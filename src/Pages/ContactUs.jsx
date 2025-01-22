import "./styles/contactUs.css";
import add from "../Assets/gps.png";
import gmail from "../Assets/gmail.png";
import phone from "../Assets/phone-call.png";

const ContactUs = () => {
  return (
    <div id="contact">
      <h1 className="head">CONTACT US</h1>
      <div className="details">
        <div className="address">
          <img src={add} alt="" />
          <h1>Address</h1>
          <p>
            {" "}
            Village-Mirzapur,Numberdar Colony, Near - Anti corruption
            Bureau,Sector-74 Faridabad , Haryana, Pincode- 121004
          </p>
        </div>

      
        <div className="email">
          <img src={gmail} alt="" />
          <h1>Email us</h1>
          <p>
            <a href="mailto:surajyadav@chagans.com">surajyadav@chagans.com</a>
          </p>
          <p>
            <a href="mailto:sy241527@gmail.com">sy241527@gmail.com</a>
          </p>
          <p>
            <a href="mailto:sy241528@gmail.com">sy241528@gmail.com</a>
          </p>
        </div>

        <div className="phone">
          <img src={phone} alt="" />
          <h1>Call us</h1>
          <p>
            <a href="tel:+918810300724">+91- 8810300724</a>
          </p>
          <p>
            <a href="tel:+918888888888">+91- 8888888888</a>
          </p>
          <p>
            <a href="tel:+917777777777">+91- 7777777777</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
