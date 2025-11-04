// src/App.jsx
import { useState } from 'react';
const apiKey = import.meta.env.VITE_API_KEY;

const App = () => {
  const [city, setCity] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
    let data = await response.json();
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        Please enter your city name for the weather: {city} 
        <br></br>
        <input type="text" name="city" onChange={handleChange} />
        <button type="submit">Get my forecast!</button>
      </form>
    </>
  );
}

export default App