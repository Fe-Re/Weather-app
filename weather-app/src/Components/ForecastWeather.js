export function ForecastWeather({ forWeather }) {
  return (
    <>
      {typeof forWeather != "undefined" ? (
        <div className="forecast-container">
          <span></span>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
