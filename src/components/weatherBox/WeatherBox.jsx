import { useEffect, useState } from "react";
import { weatherForecastApi } from "../../api/weatherApi";
import "./weatherbox.scss";
export default function WeatherBox() {
  const [location, setLocation] = useState();
  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(false);

  /* 현 위치 위경도 가져오기 */
  useEffect(() => {
    const onSuccess = (location) => {
      // console.log(location);
      setLocation({
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      });
    };
    const onError = (error) => {
      console.log(error);
    };
    return () => {
      new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(
          (position) => resolve(onSuccess(position)),
          (error) => reject(onError(error))
        )
      );
    };
  }, []);
  /*
  API 호출 시 API 호출 값을 받기 전까지, 
  실행되지 않게 설정하지 않아서 발생한 문제(비동기 설정 X)
  또한, gelocation 메소드는 return 반환이 없다는 것.
  함수에 new Promise 를 정의하여, 반환되는 값 나오게 만들기
*/
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
