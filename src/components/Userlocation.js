import React, { useState } from "react";
import "./Searchlocation.css";
import humidityicon from "./humidity.jpg";
import searchicon from "./search-icon.webp";
const Userlocation = (props) => {
  const [temperature, setTemperature] = useState();
  const [cityname, setCityName] = useState("");
  const [searchtemperature, setsearchTemperature] = useState();
  const [searchcityname, setsearchCityName] = useState("");
  const [query, setQuery] = useState("");
  const [isvisible, setIsVisible] = useState(false);
  const [humidity, setHumidity] = useState();
  const apikey = "2a9d131282265146853311eea52d66c6";
  function locationasking() {
    setIsVisible(false)
    navigator.geolocation.getCurrentPosition(
      userlocationretrieved,
      userrejectedtoaccesslocation
    );
    async function userlocationretrieved(position) {

      let exampleposition = position;
      console.log(exampleposition);
      let user_latitude = position.coords.latitude;
      let user_longitude = position.coords.longitude;
      console.log(user_latitude);
      console.log(user_longitude);
      const accessing_weather = `https://api.openweathermap.org/data/2.5/weather?lat=${user_latitude}&lon=${user_longitude}&units=metric&appid=${apikey}`;
      let accessing_weather_fetchingurl = await fetch(accessing_weather);
      let accessing_weather_parseddata =
        await accessing_weather_fetchingurl.json();
      console.log(accessing_weather_parseddata);
      let accessing_weather_temperature = accessing_weather_parseddata.main.temp;
      let accessing_weather_humidity = accessing_weather_parseddata.main.humidity;
      setHumidity(accessing_weather_humidity);
      let roundofftemperature = Math.round(accessing_weather_temperature);
      setTemperature(roundofftemperature);
      const converting_coordinates_to_cityname = `http://api.openweathermap.org/geo/1.0/reverse?lat=${user_latitude}&lon=${user_longitude}&appid=${apikey}`;
      let converting_coordinates_to_cityname_fetching_url = await fetch(
        converting_coordinates_to_cityname
      );
      let converting_coordinates_to_cityname_parseddata =
        await converting_coordinates_to_cityname_fetching_url.json();
      let converting_coordinates_to_cityname_data =
        converting_coordinates_to_cityname_parseddata[0].name;
      console.log(converting_coordinates_to_cityname_parseddata);
      setCityName(converting_coordinates_to_cityname_data);
    }

    async function userrejectedtoaccesslocation() {

      const accessing_weather = `https://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&units=metric&appid=${apikey}`;
      let accessing_weather_fetchingurl = await fetch(accessing_weather);
      let accessing_weather_parseddata =
        await accessing_weather_fetchingurl.json();
      console.log(accessing_weather_parseddata);
      let accessing_weather_temperature = accessing_weather_parseddata.main.temp;
      let accessing_weather_humidity = accessing_weather_parseddata.main.humidity;
      setHumidity(accessing_weather_humidity);
      let roundofftemperature = Math.round(accessing_weather_temperature);
      setTemperature(roundofftemperature);
      const converting_coordinates_to_cityname = `http://api.openweathermap.org/geo/1.0/reverse?lat=${props.latitude}&lon=${props.longitude}&appid=${apikey}`;
      let converting_coordinates_to_cityname_fetching_url = await fetch(
        converting_coordinates_to_cityname
      );
      let converting_coordinates_to_cityname_parseddata =
        await converting_coordinates_to_cityname_fetching_url.json();
      let converting_coordinates_to_cityname_data =
        converting_coordinates_to_cityname_parseddata[0].name;
      console.log(converting_coordinates_to_cityname_parseddata);
      setCityName(converting_coordinates_to_cityname_data);
    }
  }




  const searchforlocation = async () => {
    setIsVisible(true);
    const converting_cityname_to_coordinates = `http://api.openweathermap.org/geo/1.0/direct?q=${query},&appid=${apikey}`;
    let converting_cityname_to_coordinates_fetchingurl = await fetch(
      converting_cityname_to_coordinates
    );
    let converting_cityname_to_coordinates_parseddata =
      await converting_cityname_to_coordinates_fetchingurl.json();
    let converting_cityname_to_coordinates_data =
      converting_cityname_to_coordinates_parseddata[0];
    let converting_cityname_to_coordinates_latitude =
      converting_cityname_to_coordinates_data.lat;
    let converting_cityname_to_coordinates_longitude =
      converting_cityname_to_coordinates_data.lon;

    console.log(converting_cityname_to_coordinates_latitude);
    console.log(converting_cityname_to_coordinates_longitude);
    const accessing_weather = `https://api.openweathermap.org/data/2.5/weather?lat=${converting_cityname_to_coordinates_latitude}&lon=${converting_cityname_to_coordinates_longitude}&units=metric&appid=${apikey}`;
    let accessing_weather_fetchingurl = await fetch(accessing_weather);
    let accessing_weather_parseddata =
      await accessing_weather_fetchingurl.json();
    console.log(accessing_weather_parseddata);
    let accessing_weather_temperature = accessing_weather_parseddata.main.temp;
    let searchlocationtemperature = Math.round(accessing_weather_temperature);
    setsearchTemperature(searchlocationtemperature);
    let accessing_weather_humidity = accessing_weather_parseddata.main.humidity;
    setHumidity(accessing_weather_humidity);

    const converting_coordinates_to_cityname = `http://api.openweathermap.org/geo/1.0/reverse?lat=${converting_cityname_to_coordinates_latitude}&lon=${converting_cityname_to_coordinates_longitude}&appid=${apikey}`;
    let converting_coordinates_to_cityname_fetching_url = await fetch(
      converting_coordinates_to_cityname
    );
    let converting_coordinates_to_cityname_parseddata =
      await converting_coordinates_to_cityname_fetching_url.json();
    let searchlocationcityname =
      converting_coordinates_to_cityname_parseddata[0].name;
    console.log(converting_coordinates_to_cityname_parseddata);
    setsearchCityName(searchlocationcityname);
  };


  return (
    <>
      <div className="search-container" onLoad={locationasking}>
        <div className="search-bar">
          <input
            type="search"
            className="cityinput"
            placeholder="Type a City"
            autoFocus="on"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            value={query}
          />
        </div>
        <div className="div_of_search_icon">
          <img
            className="search_icon"
            src={searchicon}
            alt="Search"
            onClick={searchforlocation}
          />
        </div>
        <button className="currentlocationbtn" onClick={locationasking}></button>

      </div>
      {isvisible || (
        <>
          <div style={{ marginBottom: "50px", marginTop: "20px", fontSize: "50px", color: "white" }}>
            <div className="temperature">
              {temperature}°<span>C</span>
            </div>
            <div className="cityname">{cityname}</div>
          </div>
        </>
      )}
      {isvisible && (
        <>
          <div style={{ marginBottom: "20px", marginTop: "20px", fontSize: "50px", color: "white" }}>
            <div className="temperature">
              {searchtemperature}°<span>C</span>
            </div>
            <div className="cityname">{searchcityname}</div>
          </div>
        </>
      )}
      <div className="containerofverticalline">
        <div className="verticalline"></div>
      </div>
      <div className="humidityandwindspeedcontainer">
        <img src={humidityicon} alt="humidityicon" style={{ position: "absolute", justifyContent: "left", display: "flex", height: "70px", width: "70px", marginTop: "25px" ,marginLeft:"15px"}} />

        <div className="humiditycontainer">
          <div className="humiditystatic">Humidity</div>
          <div className="humiditydynamic">{humidity}%</div>
        </div>
      </div>
    </>
  );
};

export default Userlocation;
