import {Route, Routes } from "react-router-dom";
import  Home  from "./Components/Home/Home";
import  Admin  from "./Components/Admin/Admin";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
