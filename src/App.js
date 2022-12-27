import React from "react";
import { Routes, Route } from "react-router-dom";
import Card from "./components/Card"
import Home from "./components/Home"
import ShowCard from "./components/ShowCard";
import './App.css'


const App = () => {
  return (
    <div className="App">
      {/* <Card /> */}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/showcard" element={<ShowCard />}></Route>
        {/* <Route path="/login" element={<Login />}></Route> */}
      </Routes>

    </div>

  )
}

export default App;
