import { FaRegHandPointRight } from "react-icons/fa";
import myProfile from "../Assets/profile.jpg";
import { useState } from "react";
import "../Pages/mini/Form";
import Form from "../Pages/mini/Form";
import Popup from "./Popup";
  
const HeroPage = () => {
  const [open, setOpen] = useState(false);

  const appointment = () => setOpen(!open);
  return (
    <div
      id="home"
      className="myProfile"
      style={{ backgroundImage: `url(${myProfile})` }}
    >
      <div className="overLay">
        <div>
          <h1> A Better Life Starts with a Beautiful Smile</h1>
          <h2>
            This is a short description eleborating the service you have
            mentioned above
          </h2>
          <button onClick={appointment}>
            <span>
              <FaRegHandPointRight />{" "}
            </span>{" "}
            Book An Appointment
          </button>
        </div>
      </div>
      {open && <Popup cmp={<Form />}  close={appointment} />}
    </div>  
  );
};

export default HeroPage;
