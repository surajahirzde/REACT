import "./styles/service.css";
import wd from "../Assets/app-development.png";

import react from "../Assets/atom.png";
import mongodb from "../Assets/cloud-database.png";
import express from "../Assets/eco-e.png";

import node from "../Assets/node-js.png";
import bootstrap from "../Assets/letter-b.png";
import python from "../Assets/python.png";
import js from "../Assets/js.png";
import c from "../Assets/c-.png";

const Service = () => {
  return (
    <div id="services" className="service">
      <h1 className="servicehead">Our Services</h1>
      <div className="heading">
        <h1>Complete Solution At one Place</h1>
        <h2>Bringing Life To Your Smile</h2>
      </div>

      <div className="cards">
        <div className="card">
          <img src={wd} alt="" />
          <h1>Web Development</h1>
        </div>

        <div className="card">
          <img src={react} alt="" />
          <h1>React Js</h1>
        </div>

        <div className="card">
          <img src={mongodb} alt="" />
          <h1>MongoDB</h1>
        </div>

        <div className="card">
          <img src={express} alt="" />
          <h1>Express Js</h1>
        </div>

        <div className="card">
          <img src={node} alt="" />
          <h1>Node Js</h1>
        </div>

        <div className="card">
          <img src={bootstrap} alt="" />
          <h1>Bootstrap</h1>
        </div>

        <div className="card">
          <img src={python} alt="" />
          <h1>Python</h1>
        </div>

        <div className="card">
          <img src={js} alt="" />
          <h1>JavaScript</h1>
        </div>

        <div className="card">
          <img src={c} alt="" />
          <h1>C</h1>
        </div>
      </div>
    </div>
  );
};

export default Service;
