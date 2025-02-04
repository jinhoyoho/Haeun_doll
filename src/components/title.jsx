import React from "react";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import {
  WEDDING_DATE,
  WEDDING_LOCATION,
  GROOM_NAME,
  BRIDE_NAME,
} from "../../config.js";
import BackgroundVideo from "../assets/haeun_video.mp4";
import GroovePaper from "../assets/GroovePaper.png";
import Hauenmain from "../assets/hauen_main.jpg";

const Layout = styled.div`
  width: 70%;
  overflow: hidden;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 42px;
  font-weight: 500 !important;
  color: var(--title-color);
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
`;

const VideoBackground = styled.video`
  width: 100%;
`;

const WeddingInvitation = styled.p`
  font-size: 0.825rem;
  opacity: 0.45;
  margin-bottom: 16px;
`;

const GroomBride = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  opacity: 0.9;
  margin-bottom: 16px;
`;

const Schedule = styled.p`
  font-size: 1.06rem;
  opacity: 0.65;
  margin-bottom: 24px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const images = [
  {
    original: Hauenmain,
  },
];

const Title = () => {
  return (
    <div>
      <Layout>
        <TitleWrapper>
          <WeddingInvitation>하은이의 첫번째 생일</WeddingInvitation>
          <GroomBride>하은이 돌잔치</GroomBride>
          <Schedule>
            {WEDDING_DATE}
            <br />
            {WEDDING_LOCATION}
          </Schedule>
        </TitleWrapper>

        {/* <VideoBackground autoPlay loop muted playsInline={true}>
        <source src={BackgroundVideo} type="video/mp4" />
      </VideoBackground> */}
      </Layout>

      <Wrapper>
        <ImageGallery
          showPlayButton={false}
          showFullscreenButton={false}
          items={images}
        />
      </Wrapper>
    </div>
  );
};

export default Title;
