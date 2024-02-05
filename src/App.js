import './App.css';
import React from "react";
import Userlocation from "./components/Userlocation";
import Searchlocation from "./components/Searchlocation";
function App() {
  return (
    <div className="App">
      <>
     
        <p>Bharat Weather App</p>
        <Searchlocation/>
        <Userlocation/>
     </>
    </div>
  );
}

export default App;
