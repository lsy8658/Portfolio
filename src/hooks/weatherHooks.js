import { useState } from "react";
import { setCurrentLocation } from "../redux/reducers/weatherReducer";
import { useDispatch } from "react-redux";

export const useWeatherHooks = () => {
  const dispatch = useDispatch();

  const getCurrentlocation = () => {
    const success = (position) => {
      if (!position) return;
      dispatch(
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      );
    };

    const error = (error) => {
      console.log(error);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return {
    getCurrentlocation,
  };
};

/*
Geolocation.getCurrentPosition(): 
장치의 현재 위치를 가져온다.
Geolocation.watchPosition(): 
장치의 위치가 바뀔 때마다 자동으로 새로운 위치를 사용해 호출할 처리기 함수를 등록한다.
*/
