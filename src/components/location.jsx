import React, { useEffect } from "react";
import { Divider } from "antd";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";
import Flower from "../assets/flower2.png";
import MapPic from "../assets/haeun_pic2.jpg";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 80%;
  margin: 0 auto;
`;

const ImgWrapper = styled.div`
  padding-top: 24px;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Content = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
  padding-top: 42px;
  padding-bottom: 42px;
  margin: 0;
`;

const Map = styled.div`
  width: 100%;
  padding: 0;
`;

const Location = () => {
  // 카카오 맵 불러오기

  // <!-- 3. 실행 스크립트 -->
  const executeScript = () => {
    const scriptTag = document.createElement("script");
    const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
    "timestamp" : "1738670586882",
    "key" : "2mxfm",
    "mapWidth" : "100%",
    "mapHeight" : "240"
  }).render();`);
    scriptTag.appendChild(inlineScript);
    document.body.appendChild(scriptTag);
  };

  const images = [
    {
      original: MapPic,
    },
  ];

  // <!-- 2. 설치 스크립트 * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다. -->
  // document.write 문제가 발생해서 해당 파일을 직접 가져온다음 수정했음
  const InstallScript = () => {
    (function () {
      let c = window.location.protocol === "https:" ? "https:" : "http:";
      let a = "16137cec";

      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) {
        return;
      }
      window.daum = window.daum || {};
      window.daum.roughmap = {
        cdn: a,
        URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
        url_protocal: c,
      };
      let b =
        c +
        "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" +
        a +
        "/roughmapLander.js";

      // document.write -> doumnet.body.append로 수정
      const scriptTag = document.createElement("script");
      scriptTag.src = b;
      document.body.append(scriptTag);
      scriptTag.onload = () => {
        executeScript();
      };
    })();
  };

  useEffect(() => {
    InstallScript();
  }, [InstallScript]);

  return (
    <div>
      <Wrapper>
        <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
          <Title>오시는 길</Title>
        </Divider>
        <Image src={Flower} />
        <Map
          id="daumRoughmapContainer1738670586882"
          className="root_daum_roughmap root_daum_roughmap_landing"
        ></Map>
        <Content>
          경기도 파주시 탄현면 요풍길 117
          <br />
          파티수 파주한옥점
          <br />
        </Content>
      </Wrapper>

      <ImgWrapper>
        <ImageGallery
          showPlayButton={false}
          showFullscreenButton={false}
          items={images}
        />
      </ImgWrapper>
    </div>
  );
};

export default Location;
