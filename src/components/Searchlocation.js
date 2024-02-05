import React ,{useEffect}from 'react'

const Searchlocation = () => {
    const apikey="2a9d131282265146853311eea52d66c6"
    const searchforlocation = async () => {
        const converting_cityname_to_coordinates =`http://api.openweathermap.org/geo/1.0/direct?q=Mumbai,&appid=${apikey}`;
        let converting_cityname_to_coordinates_fetchingurl = await fetch(converting_cityname_to_coordinates);
        let converting_cityname_to_coordinates_parseddata = await converting_cityname_to_coordinates_fetchingurl.json();
        let converting_cityname_to_coordinates_data=  converting_cityname_to_coordinates_parseddata[0];
        let converting_cityname_to_coordinates_latitude=converting_cityname_to_coordinates_data.lat;
        let converting_cityname_to_coordinates_longitude=converting_cityname_to_coordinates_data.lon;
        const accessing_weather = `https://api.openweathermap.org/data/2.5/weather?lat=${converting_cityname_to_coordinates_latitude}&lon=${converting_cityname_to_coordinates_longitude}&appid=${apikey}`;
        let accessing_weather_fetchingurl=await fetch(accessing_weather);
        let accessing_weather_parseddata=await accessing_weather_fetchingurl.json();
        let accessing_weather_temperature=accessing_weather_parseddata.main.temp;
        
        console.log(accessing_weather_temperature);
        // console.log(parseddata);
      };
      useEffect(() => {
        searchforlocation();
      });
  return (
    <div>
      
    </div>
  )
}

export default Searchlocation
