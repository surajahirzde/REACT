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
import data1 from "../Assets/analysis (1).png";
import AllData from "./AllData";
import { useState } from "react";
import ServiceForm from "./ServiceForm";
import Popup from "./Popup";

const Service = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const service = () => setOpen(!open);
  const [data, setData] = useState(false);

  const close = () => setData(!data);

  return (
    <div id="services" className="service">
      <h1 className="servicehead">Our Services</h1>
      <div className="heading">
        <h1>Complete Solution At one Place</h1>
        <h2>Bringing Life To Your Smile</h2>
      </div>

      <div className="cards">
        <div
          className="card"
          onClick={() => {
            setName("Web Development");
            service();
          }}
        >
          <img src={wd} alt="" />
          <h1>Web Development</h1>
        </div>

        <div
          className="card"
          onClick={() => {
            setName("React Js");
            service();
          }}
        >
          <img src={react} alt="" />
          <h1>React Js</h1>
        </div>

        <div
          className="card"
          onClick={() => {
            setName("MongoDB");
            service();
          }}
        >
          <img src={mongodb} alt="" />
          <h1>MongoDB</h1>
        </div>

        <div
          className="card"
          onClick={() => {
            setName("Express Js");
            service();
          }}
        >
          <img src={express} alt="" />
          <h1>Express Js</h1>
        </div>

        <div
          className="card"
          onClick={() => {
            setName("Node Js");
            service();
          }}
        >
          <img src={node} alt="" />
          <h1>Node Js</h1>
        </div>

        <div
          className="card"
          onClick={() => {
            setName("Bootstrap");
            service();
          }}
        >
          <img src={bootstrap} alt="" />
          <h1>Bootstrap</h1>
        </div>

        <div
          className="card"
          onClick={() => {
            setName("Python");
            service();
          }}
        >
          <img src={python} alt="" />
          <h1>Python</h1>
        </div>

        <div
          className="card"
          onClick={() => {
            setName("JavaScript");
            service();
          }}
        >
          <img src={js} alt="" />
          <h1>JavaScript</h1>
        </div>

        <div
          className="card"
          onClick={() => {
            setName("C++");
            service();
          }}
        >
          <img src={c} alt="" />
          <h1>C++</h1>
        </div>

        <div className="card last" onClick={close}>
          <img src={data1} alt="" />
          <h1>All Enquiries</h1>
        </div>
      </div>

      {data && (
        <Popup cmp={<AllData sName={name} close={close} />} close={close} />
      )}
      {open && (
        <Popup
          cmp={<ServiceForm sName={name} close={service} />}
          close={service}
        />
      )}
    </div>
  );
};

export default Service;
