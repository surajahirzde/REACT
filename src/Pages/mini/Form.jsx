import "../mini/styles/form.css";
const Form = () => {
  return (
    <div className="form">
      <form>
        <input
          type="text"
          placeholder="Enter Your  Name"
          maxLength={20}
          required
        />
        <input type="email" placeholder="Enter Your  Email"  maxLength={20} required />
        <input type="text" placeholder="Enter Your  Message"  maxLength={20} required />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
