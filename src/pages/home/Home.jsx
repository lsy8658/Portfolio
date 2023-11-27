import WeatherBox from "../../components/weatherBox/WeatherBox";
import TextAnimation from "../../components/textAnimation/TypingAnimation.jsx";
import "./home.scss";
import MusicPlayer from "../../components/musicplayer/MusicPlayer.jsx";

export default function Home() {
  return (
    <div className="section">
      <div className="home_text_wrap">
        <TextAnimation text={"Front-end Developer"} time={200} />
      </div>
      <p className="sub_txt">LEE SUNG YOON</p>
      <WeatherBox />
      <MusicPlayer />
    </div>
  );
}
