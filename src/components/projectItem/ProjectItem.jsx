import "./projectItem.scss";
import useIntersectionObserverHook from "../../hooks/useIntersectionObserverHook";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import ReactPlayer from "react-player";
const ProjectItem = (props) => {
  const { title, dev, desc, info, imgs, containerRef, lineRef, url, video } =
    props;
  const [showImg, setShowImg] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  const isContainerViewport = useIntersectionObserverHook(
    containerRef && containerRef
  );
  const isLineViewport = useIntersectionObserverHook(lineRef && lineRef);
  const isInfoViewport = useIntersectionObserverHook(lineRef && lineRef);
  const showImgFnc = (img) => {
    setShowImg(img);
  };
  const closeModal = () => {
    setShowImg("");
    setShowVideo(false);
  };

  const goToLink = (link) => {
    console.log(link);
    if (link) window.open(link);
  };

  const playVideo = () => {
    setShowVideo(true);
  };
  return (
    <>
      <div
        className={`project_item ${isContainerViewport ? "active" : ""}`}
        ref={containerRef ? containerRef : null}
      >
        <div className={`project_info ${isInfoViewport ? "active" : ""}`}>
          <div className="text_wrap">
            <h3 className="title">{title ? title : ""}</h3>
            <p className="dev">{dev ? dev : ""}</p>

            <p className="info">{desc ? desc : ""}</p>
          </div>
        </div>
        <div className="project_view">
          {imgs.length > 1 ? (
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={2}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              breakpoint={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              modules={[EffectCoverflow, Pagination]}
              className="swiper"
            >
              {imgs &&
                imgs.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img src={img} onClick={() => showImgFnc(img)} />
                  </SwiperSlide>
                ))}
            </Swiper>
          ) : (
            <Swiper
              breakpoint={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
            >
              {imgs && (
                <SwiperSlide>
                  <img
                    src={imgs[0]}
                    onClick={() => showImgFnc(imgs[0])}
                    className="mySwiper"
                  />
                </SwiperSlide>
              )}
            </Swiper>
          )}
          <div className="btns">
            {video && <button onClick={playVideo}>Video</button>}
            {url && <button onClick={() => goToLink(url)}>Link</button>}
            {info && <button onClick={() => goToLink(info)}>Info</button>}
          </div>
        </div>
        <div
          className={`line ${isLineViewport ? "active" : ""}`}
          ref={lineRef ? lineRef : null}
        ></div>
      </div>
      {showImg && (
        <>
          <div className="modalVim"></div>
          <div className="showImgModal">
            <IoClose className="close_btn" size={50} onClick={closeModal} />
            <img src={showImg} alt="" />
          </div>
        </>
      )}
      {showVideo && (
        <>
          <div className="modalVim"></div>
          <IoClose className="close_btn" size={50} onClick={closeModal} />
          <ReactPlayer
            playing={true}
            url={video}
            className="video_player"
            width={"95%"}
            controls
          />
        </>
      )}
    </>
  );
};

export default ProjectItem;
