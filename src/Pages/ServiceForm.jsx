import "../Pages/styles/ServiceForm.css";
import PropTypes from "prop-types";
import { useState } from "react";
const ServiceForm = ({ sName,close }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const saveIntoLocalStorage = (e) => {
    e.preventDefault();
    const data = { name, email, message,serviceName:sName };
    // get previous data
    const previousData = JSON.parse(localStorage.getItem("form2"));
    if (previousData) {
      localStorage.setItem("form2", JSON.stringify([...previousData, data]));
    } else {
      localStorage.setItem("form2", JSON.stringify([data]));
    }
    setName("");
    setEmail("");
    setMessage("");
    alert("Form submitted successfully");
    close();
  };

  return (
    <div className="form">
      <h3>{sName}</h3>
      <form onSubmit={saveIntoLocalStorage}>
        <input
          type="text"
          placeholder="Enter Your  Name"
          maxLength={20}
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <input
          type="email"
          placeholder="Enter Your  Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="text"
          placeholder="Enter Your  Message"
          required
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ServiceForm;

ServiceForm.propTypes = {
  sName: PropTypes.string.isRequired,
  close: PropTypes.func
};