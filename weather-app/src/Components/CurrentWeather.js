export function CurrentWeather({ curWeather }) {
  if (!curWeather.main) return null;
  const weatherCondition = curWeather.weather[0].main;
  const weatherIcon = `https://openweathermap.org/img/wn/${curWeather.weather[0].icon}@2x.png`;

  return (
    <>
      {typeof curWeather.main != "undefined" ? (
        <div className="current-container">
          <div className="current-weather">
            <h2>Current Weather</h2>
            <img
              className="weather-icon"
              src={weatherIcon}
              alt={weatherCondition}
            />
            <h3>
              {curWeather.name}, {curWeather.sys.country}
            </h3>
            <p>{curWeather.main.temp.toFixed(1)}°C</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
