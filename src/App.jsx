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
import HomeContent from "./Componants/HomeContent";
import { Feature } from "./Componants/features";
import { Footer } from "./Componants/footer";
import Footer2 from "./Componants/Footer2";
import Loader from "./Componants/Loader/Loader";
function App() {
  const [nav, setNav] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar2 nav={nav} setNav={setNav} />
          <Hero />
          <Feature />
          <HomeContent />
          <Footer2 />
        </>
      ),
    },
    {
      path: "contact",
      element: (
        <>
          <NavBar2 nav={nav} setNav={setNav} />
          <Form />
          <Footer2 />
        </>
      ),
    },
    {
      path: "*",
      element: (
        <>
          <NavBar2 nav={nav} setNav={setNav} />
          <Error />
          <Footer2 />
        </>
      ),
    },
    {
      path: "loader",
      element: (
        <>
          <Loader/>
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
