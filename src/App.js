import "./globals/global.scss";
import "./globals/mixin.scss";
import "./globals/fonts.scss";
import "./globals/themes.scss";
import { Routers } from "./route/Routers";
import Nav from "./components/nav/Nav";

import MusicPlayer from "./components/musicplayer/MusicPlayer";
import ScrollTopButton from "./components/scrollTopButton/ScrollTopButton";
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main_container">
        <Routers />
      </div>
      <ScrollTopButton />
      <MusicPlayer />

      {/* <div className="copyright">Copyright © LSY 2023. Nov.</div> */}
    </div>
  );
}

export default App;

/*
import ChatBox from "./components/chatBox/ChatBox";
import Test from "./pages/test/Test.jsx";
  <Test />
   <ChatBox /> 은 생각 좀 해보고 적용하기 .. 
   당장 적용할 부분이 안떠오름
*/
