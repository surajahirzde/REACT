import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./helper/Rootlayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import ContactUs from "./Pages/ContactUs";
import Frame from "./Pages/Frame";

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<Frame />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
