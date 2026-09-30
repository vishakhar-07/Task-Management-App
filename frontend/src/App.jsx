import Home from "./components/Home";
import { BrowserRouter , Routes , Route, Router } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () =>{

  return(
    <>

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}>

      </Route>
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App;