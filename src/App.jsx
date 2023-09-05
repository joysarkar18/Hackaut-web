import { useState } from "react";
import "./App.css";
import NavBar2 from "./Componants/navBar2";
import { Hero } from "./Componants/hero";
import Form from "./Componants/Form";
import { Objectives } from "./Componants/objectives";

function App() {
  const [nav, setNav] = useState(false);

  return (
    <>
      <NavBar2 nav={nav} setNav={setNav}></NavBar2>
      <Hero/>
      <Objectives/>
      <Form/>
    </>
  );
}

export default App;
