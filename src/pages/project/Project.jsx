import "./project.scss";
import { useEffect, useRef, useState } from "react";
import ProjectItem from "../../components/projectItem/ProjectItem";
import ScrollTopButton from "../../components/scrollTopButton/ScrollTopButton";
import { scrollHooks } from "../../hooks/scrollHooks";
export default function Project() {
  const { scrollTop } = scrollHooks();

  const portfolioRef0 = useRef(null);
  const portfolioInfoRef0 = useRef(null);
  const portfoliolineRef0 = useRef(null);

  const containerRef0 = useRef(null);
  const infoRef0 = useRef(null);
  const lineRef0 = useRef(null);

  const containerRef1 = useRef(null);
  const infoRef1 = useRef(null);
  const lineRef1 = useRef(null);

  const containerRef2 = useRef(null);
  const infoRef2 = useRef(null);
  const lineRef2 = useRef(null);

  const containerRef3 = useRef(null);
  const infoRef3 = useRef(null);
  const lineRef3 = useRef(null);

  const containerRef4 = useRef(null);
  const infoRef4 = useRef(null);
  const lineRef4 = useRef(null);

  const data = [
    {
      containerRef: portfolioRef0,
      lineRef: portfolioInfoRef0,
      infoRef: portfoliolineRef0,
      title: "PortFolio",
      dev: "React, Scss, Javascript",
      desc: "PortFolio",
      imgs: [
        "assets/images/project/portfolio/1.png",
        "assets/images/project/portfolio/2.png",
        "assets/images/project/portfolio/3.png",
        "assets/images/project/portfolio/4.png",
      ],
      info: "",
      video: "",
      keyWord: ["All", "FrontEnd"],
      github: "https://github.com/lsy8658/portfolio",
    },
    {
      containerRef: containerRef0,
      lineRef: lineRef0,
      infoRef: infoRef0,
      title: "Recipe book",
      dev: "Html5, Css3, Javascript, Tailwindcss",
      desc: "요리 Recipe 제공 서비스",
      imgs: [
        "assets/images/project/recipe/0.png",
        "assets/images/project/recipe/1.png",
      ],
      info: "",
      url: "https://recipe-app-lsy.netlify.app/",
      video: "",
      keyWord: ["All", "FrontEnd"],
      github: "https://github.com/lsy8658/recipe-app",
    },
    {
      containerRef: containerRef1,
      lineRef: lineRef1,
      infoRef: infoRef1,
      title: "Study Cafe",
      dev: "NextJs, Redux-toolkit, Scss, Express, MongoDB, Socket.Io",
      desc: "개발 모임을 찾는 사람들에게 쉽게 참여하고 대화할 수 있도록 만들어주는 서비스",
      imgs: [
        "assets/images/project/study-app/main.jpg",
        "assets/images/project/study-app/0.png",
        "assets/images/project/study-app/1.png",
        "assets/images/project/study-app/2.png",
        "assets/images/project/study-app/3.png",
        "assets/images/project/study-app/4.png",
        "assets/images/project/study-app/5.png",
        "assets/images/project/study-app/6.png",
        "assets/images/project/study-app/7.png",
        "assets/images/project/study-app/8.png",
        "assets/images/project/study-app/9.png",
        "assets/images/project/study-app/10.png",
        "assets/images/project/study-app/11.png",
        "assets/images/project/study-app/13.png",
        "assets/images/project/study-app/14.png",
        "assets/images/project/study-app/15.png",
        "assets/images/project/study-app/16.png",
        "assets/images/project/study-app/17.png",
        "assets/images/project/study-app/18.png",
        "assets/images/project/study-app/19.png",
        "assets/images/project/study-app/20.png",
      ],
      info: "https://www.notion.so/Sung-yoon-Front-end-eb29ac8b91eb4189a5c3e6a95883122a?p=3be898ccd579456bbc98a550ba07b2bc&pm=c",
      url: "",
      video: "assets/videos/study-app.mp4",
      keyWord: ["All", "Full"],
      github: "https://github.com/lsy8658/study-app",
    },
    {
      containerRef: containerRef2,
      lineRef: lineRef2,
      infoRef: infoRef2,
      title: "기억 gallery",
      dev: "React, Redux, Scss, Express, MongoDB",
      desc: "전시를 직접 보러 가지 않고도 비대면으로 관람할 수 있는 아티스트의 인스타그램",
      imgs: [
        "assets/images/project/gallery/main.png",
        "assets/images/project/gallery/main1.jpg",
        "assets/images/project/gallery/0.png",
        "assets/images/project/gallery/1.png",
        "assets/images/project/gallery/2.png",
        "assets/images/project/gallery/4.png",
        "assets/images/project/gallery/5.png",
        "assets/images/project/gallery/6.png",
        "assets/images/project/gallery/7.png",
        "assets/images/project/gallery/9.png",
        "assets/images/project/gallery/11.png",
      ],
      info: "https://www.notion.so/Sung-yoon-Front-end-eb29ac8b91eb4189a5c3e6a95883122a?p=54090abb324b4cb3b4e095943083a2de&pm=c",
      url: "",
      video: "assets/videos/gallery.mp4",
      keyWord: ["All", "Full"],
      github: "https://github.com/lsy8658/exhibition",
    },

    // {
    //   containerRef: containerRef4,
    //   lineRef: lineRef4,
    //   infoRef: infoRef4,
    //   title: "커리어디자인",
    //   dev: "React, Scss, Javascript",
    //   desc: "진로설계, 학업설계, 수요조사 Front end 작업",
    //   imgs: ["assets/images/project/careerdesign/main.png"],
    //   url: "https://careerdesignplatform.co.kr/",
    //   keyWord: ["All", "FrontEnd"],
    // },
    {
      containerRef: containerRef3,
      lineRef: lineRef3,
      infoRef: infoRef3,
      title: "Deep space Ai",
      dev: "Html5, Css3, Javascript",
      desc: "반응형 웹 제작",
      imgs: [
        "assets/images/project/deep-space-ai/main.png",
        "assets/images/project/deep-space-ai/0.png",
        "assets/images/project/deep-space-ai/1.png",
        "assets/images/project/deep-space-ai/2.png",
        "assets/images/project/deep-space-ai/3.png",
        "assets/images/project/deep-space-ai/4.png",
        "assets/images/project/deep-space-ai/5.png",
        "assets/images/project/deep-space-ai/6.png",
        "assets/images/project/deep-space-ai/7.png",
      ],
      url: "https://dazzling-granita-b79d5c.netlify.app/",
      keyWord: ["All", "FrontEnd"],
    },
  ];
  const [dataKey, setDataKey] = useState("All");
  const [filterData, setFilterData] = useState(data);

  useEffect(() => {
    scrollTop();
  }, []);

  useEffect(() => {
    const newData = data.filter((item) => {
      return item.keyWord.includes(dataKey);
    });
    newData && setFilterData(newData);
  }, [dataKey]);
  return (
    <div className="project_section">
      <div className="projectHeader">
        <h2 className="title">개인 Project</h2>
        <div className="filterBtns">
          <button onClick={() => setDataKey("All")}>All</button>
          <button onClick={() => setDataKey("FrontEnd")}>FrontEnd</button>
          <button onClick={() => setDataKey("Full")}>Full</button>
        </div>
      </div>

      {filterData.map((item, index) => (
        <ProjectItem
          key={index}
          containerRef={item.containerRef}
          lineRef={item.lineRef}
          infoRef={item.infoRef}
          title={item.title}
          dev={item.dev}
          desc={item.desc}
          imgs={item.imgs}
          url={item.url}
          video={item.video}
          info={item.info}
          github={item.github}
        />
      ))}
      <ScrollTopButton />
    </div>
  );
}

/*
  1. drag and drop
  2. Intersection Observer
*/
