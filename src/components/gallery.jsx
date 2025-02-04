import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

import GalleryPhoto1 from "../assets/haeun_sub_pic1.jpg";
import GalleryPhoto2 from "../assets/haeun_sub_pic2.jpg";
import GalleryPhoto3 from "../assets/haeun_sub_pic3.jpg";
import GalleryPhoto4 from "../assets/haeun_sub_pic4.jpg";
import GalleryPhoto5 from "../assets/haeun_sub_pic5.jpg";
import GalleryPhoto6 from "../assets/haeun_sub_pic6.jpg";
import GalleryPhoto7 from "../assets/haeun_sub_pic7.jpg";
import GalleryPhoto8 from "../assets/haeun_sub_pic8.jpg";
import GalleryPhoto9 from "../assets/haeun_sub_pic9.jpg";
import GalleryPhoto10 from "../assets/haeun_sub_pic10.jpg";
import GalleryPhoto11 from "../assets/haeun_sub_pic11.jpg";
import GalleryPhoto12 from "../assets/haeun_sub_pic12.jpg";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const images = [
  {
    original: GalleryPhoto1,
    thumbnail: GalleryPhoto1,
  },
  {
    original: GalleryPhoto2,
    thumbnail: GalleryPhoto2,
  },
  {
    original: GalleryPhoto3,
    thumbnail: GalleryPhoto3,
  },
  {
    original: GalleryPhoto4,
    thumbnail: GalleryPhoto4,
  },
  {
    original: GalleryPhoto5,
    thumbnail: GalleryPhoto5,
  },
  {
    original: GalleryPhoto6,
    thumbnail: GalleryPhoto6,
  },
  {
    original: GalleryPhoto7,
    thumbnail: GalleryPhoto7,
  },
  {
    original: GalleryPhoto8,
    thumbnail: GalleryPhoto8,
  },
  {
    original: GalleryPhoto9,
    thumbnail: GalleryPhoto9,
  },
  {
    original: GalleryPhoto10,
    thumbnail: GalleryPhoto10,
  },
  {
    original: GalleryPhoto11,
    thumbnail: GalleryPhoto11,
  },
  {
    original: GalleryPhoto12,
    thumbnail: GalleryPhoto12,
  },
];

const Gallery = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>하은이의 아름다운 순간</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </Wrapper>
  );
};

export default Gallery;
