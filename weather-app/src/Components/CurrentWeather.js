import clearIcon from "../Image/weather-icons/day.svg";
import cloudyIcon from "../Image/weather-icons/cloudy.svg";
import rainIcon from "../Image/weather-icons/rainy-1.svg";
import snowIcon from "../Image/weather-icons/snowy-1.svg";
import thunderstormIcon from "../Image/weather-icons/thunder.svg";

const weatherIcons = {
  Clear: clearIcon,
  Clouds: cloudyIcon,
  Rain: rainIcon,
  Snow: snowIcon,
  Thunderstorm: thunderstormIcon,
};

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
            <p>{curWeather.main.temp}°C</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
