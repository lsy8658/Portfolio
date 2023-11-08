import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { weatherForecastApi } from "../../api/weatherApi";

export default function WeatherBox() {
  const [location, setLocation] = useState();
  const currentLocation = useSelector((state) => {
    return state.weather.myLocation;
  });

  //   useEffect(() => {
  //     console.log(currentLocation);
  //     if (currentLocation) {
  //       setLocation(currentLocation);
  //     }
  //   }, [currentLocation]);

  return <div>weatherBox</div>;
}
