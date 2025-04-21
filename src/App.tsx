import { Button } from "@/components/ui/button.tsx"
import './App.css'
import {Link, Route, Routes} from "react-router-dom";
import {Home} from "@/pages/Home";
import {About} from "@/pages/About";
import {Navbar} from "@/components/custom/Navbar";

function App() {

  return (
    <>
        <Navbar />
        <div className={"flex justify-center"}>
        <Routes>
            <Route path={"/"} element={<Home/>} />
            <Route path={"/about"} element={<About/>}/>

        </Routes>
        </div>
    </>
  )
}

export default App


//