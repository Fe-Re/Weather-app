export function ForecastWeather({ forWeather }) {
  return (
    <>
      {typeof forWeather != "undefined" ? (
        <div>
          <span></span>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
