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
import Error from "./Componants/Error";



function App() {
  const [nav, setNav] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><NavBar2 nav={nav} setNav={setNav}/><Hero/></>
    },
    {
      path: "contact",
      element: <><NavBar2 nav={nav} setNav={setNav}/><Form/></>
    },
    {
      path: "*" ,
      element: <Error/>
    }
  ]);

  return (
    <>
      {/* <NavBar2 nav={nav} setNav={setNav}></NavBar2> */}
      {/* <Hero/>
      <Form/> */}
      < RouterProvider router = {router} />
    </>
  );
}

export default App;
