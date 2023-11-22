import "./project.scss";
import { useRef } from "react";
import ProjectItem from "../../components/projectItem/ProjectItem";
import ScrollTopButton from "../../components/scrollTopButton/ScrollTopButton";
export default function Project() {
  const containerRef1 = useRef(null);
  const infoRef1 = useRef(null);
  const lineRef1 = useRef(null);

  const containerRef2 = useRef(null);
  const infoRef2 = useRef(null);
  const lineRef2 = useRef(null);

  const containerRef3 = useRef(null);
  const infoRef3 = useRef(null);
  const lineRef3 = useRef(null);

  const data = [
    {
      containerRef: containerRef1,
      lineRef: lineRef1,
      infoRef: infoRef1,
      title: "Study Cafe",
      dev: "Frontend + Backend",
      info: "개발 모임을 찾는 사람들에게 쉽게 참여하고 대화할 수 있도록 만들어주는 서비스",
      img: "assets/images/project/study-app/main.jpg",
    },
    {
      containerRef: containerRef2,
      lineRef: lineRef2,
      infoRef: infoRef2,
      title: "Study Cafe",
      dev: "Frontend + Backend",
      info: "개발 모임을 찾는 사람들에게 쉽게 참여하고 대화할 수 있도록 만들어주는 서비스",
      img: "assets/images/project/study-app/main.jpg",
    },
    {
      containerRef: containerRef3,
      lineRef: lineRef3,
      infoRef: infoRef3,
      title: "Study Cafe",
      dev: "Frontend + Backend",
      info: "개발 모임을 찾는 사람들에게 쉽게 참여하고 대화할 수 있도록 만들어주는 서비스",
      img: "assets/images/project/study-app/main.jpg",
    },
  ];
  return (
    <div className="project_section">
      <h2 className="title">Project</h2>
      {data.map((item, index) => (
        <ProjectItem
          key={index}
          containerRef={item.containerRef}
          lineRef={item.lineRef}
          infoRef={item.infoRef}
          title={item.title}
          dev={item.dev}
          info={item.info}
          img={item.img}
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
