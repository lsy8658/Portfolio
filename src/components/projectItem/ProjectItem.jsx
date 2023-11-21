import "./projectItem.scss";
import useIntersectionObserverHook from "../../hooks/useIntersectionObserverHook";

const ProjectItem = (props) => {
  const { title, dev, info, img, containerRef, lineRef, infoRef } = props;

  const isContainerViewport = useIntersectionObserverHook(containerRef);
  const isLineViewport = useIntersectionObserverHook(lineRef);
  const isInfoViewport = useIntersectionObserverHook(lineRef);
  return (
    <div
      className={`project_item ${isContainerViewport ? "active" : ""}`}
      ref={containerRef ? containerRef : null}
    >
      <div className={`project_info ${isInfoViewport ? "active" : ""}`}>
        <div className="text_wrap">
          <h3 className="title">{title ? title : ""}</h3>
          <p className="dev">{dev ? dev : ""}</p>

          <p className="info">{info ? info : ""}</p>
        </div>
      </div>
      <div className="project_view">
        {img && <img src={img} alt={title && title + "img"} />}
      </div>
      <div
        className={`line ${isLineViewport ? "active" : ""}`}
        ref={lineRef ? lineRef : null}
      ></div>
    </div>
  );
};

export default ProjectItem;
