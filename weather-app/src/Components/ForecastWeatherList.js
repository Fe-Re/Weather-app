export function ForecastWeatherList({ forWeather }) {
  if (!forWeather.list) return null;

  const dailyData = forWeather.list.reduce((acc, forecast) => {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(forecast);
    return acc;
  }, {});

  const dailyForecasts = Object.keys(dailyData)
    .slice(0, 5)
    .map((date) => {
      const dayForecasts = dailyData[date];
      const minTemp = Math.min(
        ...dayForecasts.map((item) => item.main.temp_min)
      );
      const maxTemp = Math.max(
        ...dayForecasts.map((item) => item.main.temp_max)
      );
      const reprIndex = Math.floor(dayForecasts.length / 2);
      const forecastForIcon = dayForecasts[reprIndex];
      return { date, minTemp, maxTemp, forecast: forecastForIcon };
    });

  return (
    <>
      {typeof forWeather != "undefined" ? (
        <div className="forecast-container">
          <h2>5 Day Forecast</h2>
          <div className="forecast-list">
            {dailyForecasts.map((day, index) => (
              <ForecastWeatherItem key={index} day={day} />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

function ForecastWeatherItem({ day }) {
  const { date, minTemp, maxTemp, forecast } = day;
  const weatherIcon = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;

  return (
    <div className="forecast-item">
      <h3>{date}</h3>
      <img src={weatherIcon} alt={forecast.weather[0].main} />
      <p>
        {minTemp.toFixed(1)}°C - {maxTemp.toFixed(1)}°C
      </p>
      <p>{forecast.weather[0].main}</p>
    </div>
  );
}
