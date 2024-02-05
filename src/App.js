import './App.css';
import React from "react";
import Userlocation from "./components/Userlocation";
import Searchlocation from "./components/Searchlocation";
function App() {
  return (
    <div className="App">
      <>
        <Searchlocation/>
        <Userlocation/>
     </>
    </div>
  );
}

export default App;
