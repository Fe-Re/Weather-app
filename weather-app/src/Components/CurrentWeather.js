export function CurrentWeather({ curWeather }) {
  return (
    <>
      {typeof curWeather.main != "undefined" ? (
        <div className="current-container">
          <p>
            {curWeather.name}, {curWeather.sys.country}
          </p>

          <p>{curWeather.main.temp}°C</p>

          <p>{curWeather.weather[0].main}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
