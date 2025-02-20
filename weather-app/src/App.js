import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");
  const [curWeather, setCurWeather] = useState({});
  const [forWeather, setForWeather] = useState({});

  const curApi = {
    key: "015fa90fdfe8cc0d4e3f9382b806cc7b",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  function handleSearch() {
    fetch(`${curApi.base}weather?q=${search}&units=metric&APPID=${curApi.key}`)
      .then((res) => res.json())
      .then((result) => {
        setCurWeather(result);
        console.log(result);
      });
    fetch(`${curApi.base}forecast?q=${search}&units=metric&APPID=${curApi.key}`)
      .then((res) => res.json())
      .then((result) => {
        setForWeather(result);
        console.log(result);
      });
  }

  return (
    <div className="App">
      <header>
        <h1>Weather App</h1>
        <div>
          <input
            type="text"
            placeholder="Enter your location..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {typeof curWeather.main != "undefined" ? (
          <div>
            <p>
              {curWeather.name}, {curWeather.sys.country}
            </p>

            <p>{curWeather.main.temp}°C</p>

            <p>{curWeather.weather[0].main}</p>
          </div>
        ) : (
          ""
        )}
        {typeof forWeather != "undefined" ? (
          <div>
            <span></span>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}
