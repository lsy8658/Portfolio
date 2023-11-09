import { useEffect } from "react";
import { ForecastQuery } from "../../queries/weatherQuery";
import { getCurrentlocation } from "../../hooks/useWeatherHooks";
export default function WeatherBox() {
  // const { isLoading, data } = ForecastQuery();
  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  // if (data) {
  //   console.log(data);
  // }

  return (
    <div>
      {/* {data.map((todo) => (
        <li key={todo.id}>{todo.country}</li>
      ))} */}
    </div>
  );
}

// useEffect(() => {
//   const getForecastWeather = async () => {
//     try {
//       if (location) {
//         const data = await weatherForecastApi(location.lat, location.lon);
//         console.log("data =>", data);
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   getForecastWeather();

// }, [location]);
