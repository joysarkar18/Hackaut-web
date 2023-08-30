import { useState } from "react";
import "./App.css";
import NavBar from "./Componants/navBar";
import NavBar2 from "./Componants/navBar2";
import Form from "./Componants/Form";
function App() {
  const [nav, setNav] = useState(false);

  return (
    <>
      <NavBar2 nav={nav} setNav={setNav}></NavBar2>
      {/* <NavBar nav={nav} setNav={setNav}></NavBar> */}
      {/* <div className='flex text-green-600 font-bold justify-center text-6xl '>HACKAUT</div> */}
      <Form />
    </>
  );
}

export default App;
