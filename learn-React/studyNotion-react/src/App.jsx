import "./App.css";
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router";
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import { useState } from "react";



function App() {

  const[isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="w-screen h-[100%] bg-[#010203] flex flex-col overflow-x-hidden">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
            <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>} />

        </Routes>


    </div>
  );
}

export default App;
