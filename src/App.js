import injectContext from "./store/context";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import GameShowBoard from "./views/Cpu";
import NavBar from "./components/navbar";
import UserBoard from "./views/User";

function App() {
  return (
    <div 
    style={{ background: "url(https://wallpapercave.com/wp/wp8818393.jpg)", backgroundPosition: "center", position: "cover",
    backgroundRepeat: "no-repeat", height: '120vh' }}

    className="bg-secondary">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gameboard" element={<GameShowBoard />} />
          <Route path="/user" element={<UserBoard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
