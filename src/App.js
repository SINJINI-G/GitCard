import React from "react";
import Card from "./components/Card"

const App=()=>{
  return (
    <div className="App" 
    style={{
      height:'100vh',
      width:'100vw',
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
