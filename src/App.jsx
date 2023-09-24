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
          <Footer />
        </>
      ),
    },
    {
      path: "contact",
      element: (
        <>
          <NavBar2 nav={nav} setNav={setNav} />
          <Form />
          <Footer />
        </>
      ),
    },
    {
      path: "*",
      element: (
        <>
          <NavBar2 nav={nav} setNav={setNav} />
          <Error />
          <Footer />
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
