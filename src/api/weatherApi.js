import axios from "axios";

const API_KEY = process.env.OPEN_WEATHER_API_KEY;

export const weatherForecastApi = async (lat, lon) => {
  // 5일/3시간 예보자료

  if (!lat && !lon) return;
  const api = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  try {
    const result = await axios.get(api);
    return result;
  } catch (e) {
    console.log("axios error => ", e);
  }
};
