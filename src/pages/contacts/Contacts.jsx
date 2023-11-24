import "./contacts.scss";
import { FiGithub } from "react-icons/fi";
import { RxNotionLogo } from "react-icons/rx";
export default function Contacts() {
  const links = [
    "https://github.com/lsy8658",
    "https://lsy-project.tistory.com/",
    "https://www.notion.so/Sung-yoon-Front-end-eb29ac8b91eb4189a5c3e6a95883122a",
  ];
  const goToLink = (link) => {
    console.log(link);
    if (link) window.open(link);
  };

  return (
    <>
      <div className="section">
        <div className="links">
          <div className="link" onClick={() => goToLink(links[0])}>
            <div className="icon">
              <FiGithub />
            </div>
            Github
          </div>
          <div className="link" onClick={() => goToLink(links[1])}>
            <div className="icon">Ti</div> Story
          </div>
          <div className="link" onClick={() => goToLink(links[2])}>
            <div className="icon">
              <RxNotionLogo />
            </div>
            Notion
          </div>
        </div>
      </div>
    </>
  );
}
