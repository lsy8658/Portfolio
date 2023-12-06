import React from "react";
import { Helmet } from "react-helmet-async";
const MetaTag = () => {
  return (
    <Helmet>
      <title>이성윤 포트폴리오</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="keywords" content="frontend portfolio" />
      <meta
        name="description"
        content="프론트엔드 개발자 이성윤의 포트폴리오입니다."
        data-react-helmet="true"
      />
      {
        // data-react-helmet="true"
        // 각 다른 페이지에 접속시 <title> 만 바뀌고 다른 메타 태그의 content는 변경이 안됨;
        // 이를 해결하기 위해 위 속성을 추가해 따로 작업을 하지 않아도 자동으로 생성하게 만들었음
      }
      <meta name="author" content="sungyoon" />

      <meta property="og:site_name" content="이성윤 포트폴리오" />
      <meta property="og:title" content="이성윤 포트폴리오" />
      <meta property="og:image" content="./favicon.png" />
      <meta property="og:type" content="website" data-rh="true" />
      <meta
        property="og:description"
        content="프론트엔드 개발자 이성윤의 포트폴리오입니다."
      />
      <meta
        name="keywords"
        content="프론트엔드, 웹개발, lsy, portfolio, 프론트엔드 포트폴리오, 이성윤"
      />
      <meta property="og:url" content="https://lsy-portfolio.netlify.app/" />
      <meta name="twitter:title" content="이성윤 포트폴리오" />
      <meta
        name="twitter:description"
        content="프론트엔드 개발자 이성윤의 포트폴리오입니다."
      />
    </Helmet>
  );
};

export default MetaTag;

/*
  yarn add react-helmet
  react-helmet 라이브러리를 사용하여 meta 태그를 동적으로 제어하였습니다.


    
  빌드시 페이지별 html파일이 생성됨으로서 
  크롤러가 페이지별 html 파일을 볼 수 있음
  이를 해결하기 위해 react-snap 라이브러리를 사용하였습니다.

  react-snap 라이브러리 설치 
  yarn add react-snap
*/
