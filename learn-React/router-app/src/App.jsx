// import { Routes } from "react-router-dom";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./components/About"
import Support from "./components/Support";
import Home from "./components/Home";
import Labs from "./components/Labs";
import NotFound from "./components/NotFound";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import MainHeader from "./components/MainHeader";


function App() {
  return (


    <div>

      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink> 
          </li>
          <li><NavLink to="/support">Support</NavLink> 
          </li>
          <li><NavLink to="/labs">Labs</NavLink >
          </li>
          <li><NavLink to="/about">About</NavLink> 
          </li>
          
        </ul>
      </nav>
      <Routes>
        <Route path="/" element = { <MainHeader/>}> {/*...parent route...*/}

          <Route index element = {<div><Home/></div>}/>
          <Route path="/support" element = {<Support/>}/>
          <Route path="/about" element = { <About/>}/>
          <Route path="/labs" element = { <Labs/>}/>
          <Route path="*" element = {<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
