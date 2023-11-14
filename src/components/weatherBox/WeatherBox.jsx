import { useEffect, useState } from "react";
import { weatherForecastApi } from "../../api/weatherApi";
import "./weatherbox.scss";
export default function WeatherBox() {
  const [location, setLocation] = useState();
  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(false);

  /* 현 위치 위경도 가져오기 */
  useEffect(() => {
    const success = (location) => {
      // console.log(location);
      setLocation({
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      });
    };
    const error = (error) => {
      console.log(error);
    };
    return () => {
      navigator.geolocation.getCurrentPosition(success, error);
    };
  }, []);

  useEffect(() => {
    console.log(location);
  }, [location]);

  const getWeather = async () => {
    try {
      setIsLoading(true);
      const result = await weatherForecastApi(location);
      // console.log("result ==>", result);
      setIsLoading(false);
      setWeather(result);
    } catch (e) {
      console.log(e);
    }
  };

  /* openweather api 렌더링시 불러오기 */
  // useEffect(() => {
  //   const getWeather = async () => {
  //     if (location) {
  //       setIsLoading(true);
  //       const result = await weatherForecastApi(location);
  //       // console.log("result ==>", result);
  //       setIsLoading(false);
  //       setWeather(result);
  //     }
  //   };
  //   getWeather();
  //   console.log("weather=>", weather);
  // }, [location]);

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
