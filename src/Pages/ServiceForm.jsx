import "../Pages/styles/ServiceForm.css";
const ServiceForm = () => {
  return (
    <div className="form">
      <form>
        <input
          type="text"
          placeholder="Enter Your  Name"
          maxLength={20}
          required
        />
        <input type="email" placeholder="Enter Your  Email" required />
        <input type="text" placeholder="Enter Your  Message" required />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ServiceForm;
