import { useEffect, useState } from "react";
import { weatherForecastApi } from "../../api/weatherApi";
import "./weatherbox.scss";
export default function WeatherBox() {
  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getWeather = () => {
    const success = (position) => {
      const location = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };
      console.log(location);
      const fetchData = async () => {
        if (location) {
          try {
            setIsLoading(true);
            const result = await weatherForecastApi(location);
            setIsLoading(false);
            if (result) {
              setWeather(result);
            } else {
              alert("오늘은 조회할 수 없습니다. 😅");
            }
          } catch (e) {
            console.log(e);
          }
        } else {
          alert("현 위치 값이 없습니다. 😅");
        }
      };
      fetchData();
    };
    const error = (error) => {
      console.log(error);
    };
    /* 현 위치 위경도 가져오기 */
    navigator.geolocation.getCurrentPosition(success, error);
  };

  return (
    <>
      {isLoading && <div className="loading">isLoading..</div>}
      {weather ? (
        <div className="weather_container">
          <div className="weather_wrap">
            <div className="weather_main">
              <p>현 위치 날씨</p>
              <img
                className="weather_img"
                src={weather.info?.imgSrc}
                alt={weather.info?.text}
              />
            </div>
            <div className="weather_side">
              <p className="place">{weather.place}</p>
              <p className="text">{weather.info?.text}</p>
              <p className="temp">{weather.temp + " °C"}</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          {
            <button className="weatherApiButton" onClick={getWeather}>
              <img src="assets/images/weatherIcon.png" alt="" />
            </button>
          }
        </>
      )}
    </>
  );
}
