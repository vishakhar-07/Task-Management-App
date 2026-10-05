import Home from "./components/Home";
import { BrowserRouter , Routes , Route, Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import UpdateTask from "./components/UpdateTask";


const App = () =>{

  return(
    <>

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route  path="/addtask" element={<AddTask/>}/>
      <Route path="/update-task/:id" element={<UpdateTask/>}/>
      
     
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App;