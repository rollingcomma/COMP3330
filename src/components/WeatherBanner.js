import React, {useState, useEffect} from 'react';
import { getWeatherByCoords} from '../apis/apiActions'

const WeatherBanner = () => {
  
  const [weatherState, setWeatherState] = useState(null);
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }
  
  useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const weather = await getWeatherByCoords(pos.coords.latitude, pos.coords.longitude);
          const currentWeather = {
            weather: weather.data.weather[0].main,
            icon_src: `http://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`,
            temp: weather.data.main.temp,
            temp_min: weather.data.main.temp_min,
            temp_max: weather.data.main.temp_max
          }
          setWeatherState(currentWeather);
        },
        (err) => {
          console.warn(`ERROR(${err.code}): ${err.message}`);
        },
        options);
  },[]);

  return(
    
    <div>
      {weatherState && 
        <div className="weather">
        <div className="d-flex flex-column">
          <div className="weather-temp">{weatherState.temp}<sup>°C</sup></div>
          <figure className="w-50">
            <img className="weather-icon" src={weatherState.icon_src} alt="..." />
            <figcaption>{weatherState.weather}</figcaption>
          </figure> 
        </div>
        <p>
          <span>lowest: {weatherState.temp_min}<sup>°C  </sup> - </span>
          <span> highest: {weatherState.temp_max}<sup>°C</sup></span>
        </p> 
          
      </div>}
    </div>
  );
}
export default WeatherBanner;