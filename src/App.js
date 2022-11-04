import React, { useState } from "react";
import axios from "axios";

export default function App() {
  let [city, setCity] = useState("null");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState(null);

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function submittedCity(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1b92415f0f2a81ca6f05973c2626e33c&units=metric`;
    axios.get(url).then(displayWeather);
  }

  let form = (
    <form onSubmit={submittedCity}>
      <input type="search" onChange={updateCity} />
      <input type="submit" value="search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
