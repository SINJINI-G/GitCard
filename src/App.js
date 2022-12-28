import {useState} from "react";
import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./components/Home"
import ShowCard from "./components/ShowCard"
// import Login from "./components/Login";


const App = () => {
  const [username, setUsername] = useState()
  // const 

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/showcard" element={<ShowCard />}></Route>
        {/* <Route path="/login" element={<Login />}></Route> */}
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>

    </div>

  )
}

export default App;
