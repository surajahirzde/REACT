
import About from "./About";

import ContactUs from "./ContactUs";
import HeroPage from "./HeroPage";
import Service from "./Service";
import "./styles/home.css";


const Home = () => {
  return (
    <div className="home">
      <HeroPage />
      <About />
      <Service  />
      <ContactUs />
      {/* <AllData /> */}
     
    </div>
  );
};

export default Home;
