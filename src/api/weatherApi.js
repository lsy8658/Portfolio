import axios from "axios";
import { weatherDummy } from "../dummy/weatherDummy";
import { weatherHook } from "../hooks/weatherHooks";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const { weatherSerialization } = weatherHook();

export const weatherForecastApi = async (location) => {
  if (!location) return;
  try {
    /* 5일 / 3시간  */
    // const api = `https://api.openweathermap.org/data/2.5/forecast?lat=${
    //   location.lat
    // }&lon=${location.lon}&appid=${API_KEY}`;

    /* 현재 날씨 */
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric&lang=kr`;
    // &units=metric 을 써주면 미터법으로 계산된 온도를 확인할 수 있다.

    // const result = await axios.get(api);
    // const data = weatherSerialization(result.data);
    const dummy = weatherDummy();
    const data = weatherSerialization(dummy);
    return data;
  } catch (e) {
    console.log(e);
  }
};
