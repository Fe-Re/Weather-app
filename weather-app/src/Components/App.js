import { useState } from "react";
import { Header } from "./Header";
import { CurrentWeather } from "./CurrentWeather";
import { ForecastWeather } from "./ForecastWeather";

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
    <>
      <div className="App">
        <Header onSetSearch={setSearch} onSearch={handleSearch} />
        <CurrentWeather curWeather={curWeather} />
        <ForecastWeather forWeather={forWeather} />
      </div>
    </>
  );
}
