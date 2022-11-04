import React from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=1b92415f0f2a81ca6f05973c2626e33c&units=metric`;
  axios.get(url).then(handleResponse);
  return <h2>Hello from Weather</h2>;
  <ClipLoader
    color="#00000"
    loading={true}
    size={150}
    aria-label="Loading Spinner"
    data-testid="loader"
  />;
}
