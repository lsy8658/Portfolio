import "./scrollTopButton.scss";
import { scrollHooks } from "../../hooks/scrollHooks";
export default function ScrollTopButton() {
  const { scrollTop } = scrollHooks();
  return (
    <div className="scrollTop_button" onClick={scrollTop}>
      Top
    </div>
  );
}
