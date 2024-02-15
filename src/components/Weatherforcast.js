import React, { useState } from "react";
import "./Weatherforcast.css";
import humidityicon from "./humidity.jpg";
import windicon from "./wind.png"
import searchicon from "./search-icon.webp";
const Userlocation = (props) => {

  const [temperature, setTemperature] = useState();
  const [cityname, setCityName] = useState("");
  const [searchtemperature, setsearchTemperature] = useState();
  const [searchcityname, setsearchCityName] = useState("");
  const [query, setQuery] = useState("");
  const [isvisible, setIsVisible] = useState(true);
  const [humidity, setHumidity] = useState();
  const [searchhumidity, setsearchHumidity] = useState();
  const [searchwindspeed, setsearchWindspeed] = useState();
  const [windspeed, setWindspeed] = useState();
  const [weathericon, setWeathericon] = useState();
  const [weatherdescription, setWeatherdescription] = useState();
  const [searchweatherdescription, setsearchWeatherdescription] = useState();

  const apikey = "2a9d131282265146853311eea52d66c6";
  function locationasking() {
    setIsVisible(true)
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
      let accessing_weather_windspeed = accessing_weather_parseddata.wind.speed;
      setWindspeed(accessing_weather_windspeed);
      let accessing_weather_icon = accessing_weather_parseddata.weather[0].icon;
      setWeathericon(accessing_weather_icon);
      let accessing_weather_description = accessing_weather_parseddata.weather[0].description;
      setWeatherdescription(accessing_weather_description)
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
      let accessing_weather_windspeed = accessing_weather_parseddata.wind.speed;
      setWindspeed(accessing_weather_windspeed);
      let accessing_weather_icon = accessing_weather_parseddata.weather[0].icon;
      setWeathericon(accessing_weather_icon);
      let accessing_weather_description = accessing_weather_parseddata.weather[0].description;
      setWeatherdescription(accessing_weather_description)
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
    try {
      setIsVisible(false);
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
      const accessing_search_weather = `https://api.openweathermap.org/data/2.5/weather?lat=${converting_cityname_to_coordinates_latitude}&lon=${converting_cityname_to_coordinates_longitude}&units=metric&appid=${apikey}`;
      let accessing_search_weather_fetchingurl = await fetch(accessing_search_weather);
      let accessing_search_weather_parseddata =
        await accessing_search_weather_fetchingurl.json();
      console.log(accessing_search_weather_parseddata);
      let accessing_search_weather_temperature = accessing_search_weather_parseddata.main.temp;
      let searchlocationtemperature = Math.round(accessing_search_weather_temperature);
      setsearchTemperature(searchlocationtemperature);
      let accessing_search_weather_description = accessing_search_weather_parseddata.weather[0].description;
      setsearchWeatherdescription(accessing_search_weather_description)
      let accessing_search_weather_humidity = accessing_search_weather_parseddata.main.humidity;
      setsearchHumidity(accessing_search_weather_humidity);
      let accessing_search_weather_windspeed = accessing_search_weather_parseddata.wind.speed;
      setsearchWindspeed(accessing_search_weather_windspeed);
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

    }
    catch (error) {
      setWeatherdescription("--")
      setsearchTemperature()
      setsearchCityName("---")
      setsearchHumidity()
      setsearchWindspeed()
      setTimeout(() => {
        alert("Please enter valid city name")
      }, 200);
    }
  };


  return (
    <>
      <div onLoad={locationasking} >
        <div className="search-container">
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
        <div className="content">
          {isvisible && (<img src={`https://openweathermap.org/img/wn/${weathericon}@2x.png`} alt="weather icon" className="weathericon" />)}
          {isvisible && (<div className="description">{weatherdescription}</div>)}
          {isvisible || (<div className="description">{searchweatherdescription}</div>)}
          {isvisible && (
            <>
              <div style={{ marginBottom: "5px", marginTop: "5px", fontSize: "70px", color: "white" }}>
                <div className="temperature">
                  {temperature}°<span>C</span>
                </div>
                <div className="cityname">{cityname}</div>
              </div>
            </>
          )}
          {isvisible || (
            <>
              <div style={{ marginBottom: "5px", marginTop: "5px", fontSize: "70px", color: "white" }}>
                <div className="temperature">
                  {searchtemperature}°<span>C</span>
                </div>
                <div className="cityname">{searchcityname}</div>
              </div>
            </>
          )}
          <div className="humidityandwindcontainer">
            <div className="humiditycontainer">
              <div className="humiditystatic">Humidity</div>
              <div className="imganddynamiccontainer">
                <img src={humidityicon} alt="humidityicon" style={{ height: "80px", width: "80px" }} />
                {isvisible && (<div className="humiditydynamic">{humidity}%</div>)}
                {isvisible || (<div className="humiditydynamic">{searchhumidity}%</div>)}
              </div>
            </div>
            <div className="windcontainer">
              <div className="windstatic">Wind Speed</div>
              <div className="imganddynamiccontainer">
                <img src={windicon} alt="windicon" style={{ height: "80px", width: "80px" }} />
                {isvisible && (<div className="winddynamic">{windspeed}km/h</div>)}
                {isvisible || (<div className="winddynamic">{searchwindspeed}km/h</div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Userlocation;
