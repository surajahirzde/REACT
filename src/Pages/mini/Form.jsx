import { useState } from "react";
import "../mini/styles/form.css";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const saveIntoLocalStorage = (e) => {
    e.preventDefault();
    const data = { name, email, message };
    // get previous data
    const previousData = JSON.parse(localStorage.getItem("form"));
    if (previousData) {
      localStorage.setItem("form", JSON.stringify([...previousData, data]));
    }else{
      localStorage.setItem("form", JSON.stringify([data]));
    }
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="form">
      <form onSubmit={saveIntoLocalStorage}>
        <input
          type="text"
          placeholder="Enter Your  Name"
          maxLength={20}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter Your  Email"
          maxLength={20}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter Your  Message"
          maxLength={20}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
