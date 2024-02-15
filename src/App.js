import './App.css';
import React from "react";
import Weatherforcast from "./components/Weatherforcast";
import "./components/Weatherforcast.css"
function App() {
  return (
    <div className="App">
      <>
        <div className="container">
          <Weatherforcast latitude={19.076} longitude={72.8777} />
        </div>
        
      </>
    </div>
  );
}

export default App;
