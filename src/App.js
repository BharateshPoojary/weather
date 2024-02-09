import './App.css';
import React from "react";
import Userlocation from "./components/Userlocation";
import "./components/Searchlocation.css"
// import Searchlocation from "./components/Searchlocation";
function App() {
  return (
    <div className="App">
      <>
          <div className="container">
          
        <Userlocation latitude={19.076} longitude={72.8777}/>
      </div>
     </>
    </div>
  );
}

export default App;
