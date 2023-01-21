import {Route, Routes } from "react-router-dom";
import  Home  from "./Components/Home/Home";
import  Admin  from "./Components/Admin/Admin";

function App() {
  return (
    <>
    <Routes>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
