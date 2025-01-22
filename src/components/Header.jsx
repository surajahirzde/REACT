import { DiSmashingMagazine } from "react-icons/di";
import { FaBars, FaTimes } from "react-icons/fa"; 
import "./styles/header.css";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false); 

  const toggleMenu = () => {
    setMenu(!menu);  
  };

  return (
    <div className="header">
      <div className="icon">
        <DiSmashingMagazine /><span>URAJ YADAV</span>
      </div>

   
      <div className="hamburger" onClick={toggleMenu}>
        {menu ? <FaTimes /> : <FaBars />} 
      </div>

    
      <div className={`services ${menu ? "open" : ""}`}>
        <ul   onClick={ () => setMenu(false)} >
          <li >
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#services">SERVICE</a>
          </li>
          <li>
            <a href="#contact">CONTACT US</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
