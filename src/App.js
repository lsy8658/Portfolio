import "./App.css";

import { Routers } from "./route/Routers";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routers />
    </div>
  );
}

export default App;
