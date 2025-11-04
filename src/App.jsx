// src/App.jsx
import { useState, useEffect } from 'react';
const apiKey = import.meta.env.VITE_API_KEY;

const App = () => {
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [temperature, setTempaterure] = useState("");
  const [conditions, setConditions] = useState("");

  useEffect(() => {
    const getData = async () => {
      let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Alert`)
      let data = await response.json();
      console.log(data)

      setLocation(data.location.name);
      setTempaterure(data.current.temp_c);
      setConditions(data.current.condition.text);
    }
    getData()
  }, [])

  const handleChange = (event) => {
    setCity(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
    let data = await response.json();
    console.log(data)

    setLocation(data.location.name);
    setTempaterure(data.current.temp_c);
    setConditions(data.current.condition.text);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        Please enter your city name for the weather: {city} 
        <br></br>
        <input type="text" name="city" onChange={handleChange} />
        <button type="submit">Get my forecast!</button>
      </form>

      <h1> Here's Your Weather Report:</h1>
      <p>Location: {location}</p>
      <p>Temperature: {temperature}</p>
      <p>Conditions: {conditions}</p>
    </>
  );
}

export default App