import './App.css'
import { Route, Routes} from "react-router-dom";
import {Home} from "@/pages/Home";
import {About} from "@/pages/About";
import {Navbar} from "@/components/custom/Navbar";

function App() {

  return (
    <>
        <Navbar />
        <Routes>
            <Route path={"/"} element={<Home/>} />
            <Route path={"/about"} element={<About/>}/>
        </Routes>
    </>
  )
}

export default App


//