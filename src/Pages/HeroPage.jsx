import { FaRegHandPointRight } from "react-icons/fa";
import myProfile from "../Assets/profile.jpg";
const HeroPage = () => {
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
          <button>
            <span>
              <FaRegHandPointRight />{" "}
            </span>{" "}
            Book An Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
