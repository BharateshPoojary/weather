import React from 'react';
import  clearsky from "./clear.png";
import "./Geoicon.css";

 function Weathericon(props) {

   return (
     <div>
         {props.weathericon === "Clear" &&(
             <>
                 <img src={clearsky} alt="clearsky" className='weathericonimages' />
             </>
         )}
      
    </div>
   )
 }

 export default Weathericon
