import React from "react";
import Card from "./components/Card"
import Image from "./assets/bg.jpg"

const App=()=>{
  return (
    <div className="App" 
    style={{
      height:'100vh',
      width:'100vw',
      backgroundImage: `url(${Image})`,
      // backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundColor:"black",
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }}>
    <Card />
    </div>
    
  )
}

export default App;
