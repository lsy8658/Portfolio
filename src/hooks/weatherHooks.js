export const weatherHook = (data) => {
  const weatherIdCheck = (id) => {
    console.log("id", id);
    let state = {
      text: "",
      imgSrc: "",
    };

    if (id < 300) {
      console.log("1");
      state = {
        text: "뇌우 (Thunderstorm)",
        imgSrc: "assets/images/thunderstorm.png",
      };
    } else if (id < 500) {
      console.log("2");
      state = {
        text: "이슬비 (Drizzle)",
        imgSrc: "assets/images/drizzle.png",
      };
    } else if (id < 600) {
      console.log("3");
      state = {
        text: "비 (Rain)",
        imgSrc: "assets/images/rain.png",
      };
    } else if (id < 700) {
      console.log("4");
      state = {
        text: "눈 (Snow)",
        imgSrc: "assets/images/snow.png",
      };
    } else if (id < 800) {
      console.log("5");
      state = {
        text: "안개 (mist)",
        imgSrc: "assets/images/mist.png",
      };
    } else if (800 === id) {
      console.log("6");
      state = {
        text: "맑은 하늘 (Clear)",
        imgSrc: "assets/images/clear.jpg",
      };
    } else if (id < 900) {
      console.log("6");
      state = {
        text: "구름 (Clouds)",
        imgSrc: "assets/images/clouds.png",
      };
    }
    return state;
  };

  const weatherSerialization = (data) => {
    if (!data) return;
    console.log(data);
    if (data.length > 0) {
      const arr = data.map((item) => {
        return {
          place: item.name,
          desc: item.weather[0].description,
          icon: item.weather[0].icon,
          info: weatherIdCheck(item.weather[0].id),
          temp: item.main.temp,
          temp_max: item.main.temp_max,
          temp_min: item.main.temp_min,
          wind: item.wind.speed,
        };
      });
      return arr;
    } else {
      return {
        place: data.name, //장소
        desc: data.weather[0].description, //자세한 설명
        icon: data.weather[0].icon, // 날씨 아이콘
        info: weatherIdCheck(data.weather[0].id), // 날씨 상태 id
        temp: data.main.temp, // 현재 온도
        temp_max: data.main.temp_max, // 최고 기온
        temp_min: data.main.temp_min, // 최저 기온
        wind: data.wind.speed, // 풍속
      };
    }
  };
  return {
    weatherSerialization,
  };
};
