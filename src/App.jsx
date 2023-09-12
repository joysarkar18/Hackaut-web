import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";
import NavBar2 from "./Componants/navBar2";
import { Hero } from "./Componants/hero";
import Form from "./Componants/Form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero/>
  },
  {
    path: "Contact Us",
    element: <Form/>
  }
]);

function App() {
  const [nav, setNav] = useState(false);

  return (
    <>
      <NavBar2 nav={nav} setNav={setNav}></NavBar2>
      {/* <Hero/>
      <Form/> */}
      < RouterProvider router = {router} />
    </>
  );
}

export default App;
