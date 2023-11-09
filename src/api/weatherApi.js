import axios from "axios";
import { weatherDummy } from "../dummy/weatherDummy";
import { getCurrentlocation } from "../hooks/useWeatherHooks";
import { useEffect } from "react";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const weatherForecastApi = async (lat, lon) => {
  try {
    // 5일/3시간 예보자료
    const api = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const result = await axios.get(api);
    // const result = await weatherDummy();
    return result;
  } catch (e) {
    console.log("axios error => ", e);
  }
};
