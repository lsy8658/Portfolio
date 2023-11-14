import WeatherBox from "../../components/weatherBox/WeatherBox";
import TextAnimation from "../../components/textAnimation/TextAnimation.jsx";
import { Link } from "react-router-dom";
import "./home.scss";
export default function Home() {
  return (
    <div className="home_container">
      <TextAnimation text={"음악전공에서 개발자로"} />
      <p className="sub_txt">프론트앤드 이성윤입니다.</p>

      <WeatherBox />
    </div>
  );
}
