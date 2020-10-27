import axios from 'axios';
const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
const weatherApiEndpoint = "https://api.openweathermap.org/data/2.5"

export const getWeatherByCoords = (lat, lon) => {
  return axios.get(`${weatherApiEndpoint}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${weatherApiKey}`);
}