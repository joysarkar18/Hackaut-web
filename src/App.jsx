import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './Componants/navBar';


function App() {
  
  const [nav, setNav] = useState(false);

  return (
    <>
    <NavBar nav={nav} setNav= {setNav}></NavBar>
      {/* <div className='flex text-green-600 font-bold justify-center text-6xl '>HACKAUT</div> */}
    </>
  );
}

export default App
