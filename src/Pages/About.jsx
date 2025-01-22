import "./styles/about.css";
import { FaRegHandPointRight } from "react-icons/fa";
import profile2 from "../Assets/p2.jpg";
import Frame from "./Frame";
import { useState } from "react";
const About = () => {
  const [show, setShow] = useState(false);

  

  
  return (
    <div id="about">
      <h1 className="abouthead">About Us</h1>

      <div className="main">
        <div className="data">


          <h1>
            MERN Stack Developer: <span>SURAJ YADAV</span>
          </h1>

          <p>
            I am a dedicated MERN Stack Developer with a strong background in
            creating dynamic, high-performance web applications using MongoDB,
            Express.js, React, and Node.js. With a passion for clean,
            maintainable code and a focus on delivering user-centric solutions,
            I specialize in building scalable applications that meet the
            evolving needs of businesses.
            <br /> <br />
            <span> Skills: </span>
            <br />
            <br /> Frontend: React.js, Redux, HTML5, CSS3, JavaScript (ES6+),
            Bootstrap, Material UI Backend: Node.js, Express.js, RESTful API
            Development Database: MongoDB, Mongoose Version Control: Git,
            GitHub, GitLab Deployment & Hosting: Netlify, DigitalOcean Other
            Tools: Postman, JWT Authentication
          </p>
          <button onClick={() => setShow({
            open: true,
            link:"http://surajahirzde.netlify.app"
          })}>
          
              {" "}
              <FaRegHandPointRight />
              Go To Linkdin
          
          </button>
        </div>
        <div className="image">
          <div
            className="image2"
            style={{ backgroundImage: `url(${profile2})` }}
          ></div>
        </div>
        {
          show?.open && <Frame src={show.link} close={() => setShow(false)} />
        }
      </div>  
    </div>
  );
};

export default About;
