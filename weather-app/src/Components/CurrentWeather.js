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
  const weatherIcon = weatherIcons[weatherCondition] || clearIcon;

  return (
    <>
      {typeof curWeather.main != "undefined" ? (
        <div className="current-container">
          <img
            className="weather-icon"
            src={weatherIcon}
            alt={weatherCondition}
          />
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
