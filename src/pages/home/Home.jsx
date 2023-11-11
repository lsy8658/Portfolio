import WeatherBox from "../../components/weatherBox/WeatherBox";
import TextAnimation from "../../components/textAnimation/TextAnimation";
export default function Home() {
  return (
    <div>
      <TextAnimation text={"hi"} />
      <WeatherBox />
    </div>
  );
}
