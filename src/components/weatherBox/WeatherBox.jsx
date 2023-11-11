import { useEffect, useState } from "react";

import { weatherForecastApi } from "../../api/weatherApi";

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

  /* openweather api 불러오기 */
  useEffect(() => {
    const getWeather = async () => {
      if (location) {
        setIsLoading(true);
        const result = await weatherForecastApi(location);
        // console.log("result ==>", result);
        setIsLoading(false);
        setWeather(result);
      }
    };
    getWeather();
  }, [location]);

  return (
    <div>
      {isLoading && <h1>isLoading...</h1>}
      {weather?.map((item) => (
        <div key={item.place}>
          <img src={item.info.imgSrc} alt={item.info.text} />
        </div>
      ))}
    </div>
  );
}
