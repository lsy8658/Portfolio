import { useState, useEffect } from "react";
import { weatherForecastApi } from "../api/weatherApi";
export const useGeolocation = () => {
  const [location, setLocation] = useState();
  const success = (location) => {
    console.log(location);
    setLocation({
      lat: location.coords.latitude,
      lon: location.coords.longitude,
    });
    return location;
  };

  const error = (error) => {
    setLocation({
      error,
    });
    console.log(error);
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("navigator.geolocation 값이 없습니다.");
    }
  }, []);
  return location;
};

// export const useForecastWeather =  () => {
//   const location =  useGeolocation();
//   let result;
//   if (location) {
//     result = weatherForecastApi(location.lat, location.lon);
//   }
//   return result;
// };
/*
Geolocation.getCurrentPosition(): 
장치의 현재 위치를 가져온다.
Geolocation.watchPosition(): 
장치의 위치가 바뀔 때마다 자동으로 새로운 위치를 사용해 호출할 처리기 함수를 등록한다.
*/
