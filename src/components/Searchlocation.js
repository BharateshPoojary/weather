import React, { useEffect, useState } from "react";
import "./Searchlocation.css";
import cloudsunny from "./cloudsunny.webp";
import searchicon from "./search-icon.webp";

const Searchlocation = () => {
  // const searchforgivenlocation=()=>{
  //     const inputtext=document.getElementById('cityinput');
  //     if (inputtext.value==="") {
  //         alert("Please enter city name")
  //     }

  //   }
  const getuserlocation = () => {
    const apikey = "2a9d131282265146853311eea52d66c6";
    navigator.geolocation.getCurrentPosition(userlocationretrieved);
    async function userlocationretrieved(position) {
      let accessing_user_latitude = position.coords.latitude;
      let accessing_user_longitude = position.coords.longitude;
      const accessing_weather = `https://api.openweathermap.org/data/2.5/weather?lat=${accessing_user_latitude}&lon=${accessing_user_longitude}&units=metric&appid=${apikey}`;
      let accessing_weather_fetchingurl = await fetch(accessing_weather);
      let accessing_weather_parseddata =
        await accessing_weather_fetchingurl.json();
      let accessing_weather_temperature =
        accessing_weather_parseddata.main.temp;
      let roundofftemperature = Math.round(accessing_weather_temperature);
      console.log(roundofftemperature);
    }
  };

  //   const searchforlocation = async () => {
  //     const converting_cityname_to_coordinates = `http://api.openweathermap.org/geo/1.0/direct?q=${inputtext.value},&appid=${apikey}`;
  //     let converting_cityname_to_coordinates_fetchingurl = await fetch(
  //       converting_cityname_to_coordinates
  //     );
  //     let converting_cityname_to_coordinates_parseddata =
  //       await converting_cityname_to_coordinates_fetchingurl.json();
  //     let converting_cityname_to_coordinates_data =
  //       converting_cityname_to_coordinates_parseddata[0];
  //     let converting_cityname_to_coordinates_latitude =
  //       converting_cityname_to_coordinates_data.lat;
  //     let converting_cityname_to_coordinates_longitude =
  //       converting_cityname_to_coordinates_data.lon;

  // console.log(parseddata);

  //   };
  //   searchforlocation();
  useEffect(() => {
    getuserlocation();
  }, []);

  return (
    <>
      <div className="container">
        <div className="search-bar">
          <input
            type="search"
            id="cityinput"
            placeholder="Type a City"
            autoFocus="on"
          />
        </div>
        <div className="div_of_search_icon">
          <img className="search_icon" src={searchicon} alt="Search" />
        </div>
      </div>
    </>
  );
};

export default Searchlocation;
