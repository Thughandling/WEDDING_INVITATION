import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

import GalleryPhoto1 from "../assets/Gallery_Photo_1.webp";
import GalleryPhoto2 from "../assets/Gallery_Photo_2.webp";
import GalleryPhoto3 from "../assets/Gallery_Photo_3.webp";
import GalleryPhoto4 from "../assets/Gallery_Photo_4.webp";
import GalleryPhoto5 from "../assets/Gallery_Photo_5.webp";
import GalleryPhoto6 from "../assets/Gallery_Photo_6.webp";
import SizeContext from "antd/lib/config-provider/SizeContext";

const Wrapper = styled.div`
  background: #FFFFFF;
  padding-top: 30px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

// const Title = styled.p`
//   font-size: 1rem;
//   color: var(--title-color);
//   font-weight: bold;
//   opacity: 0.85;
//   margin-bottom: 0;
//   text-align: center;
// `;

const Title = styled.p`
  font-family : BookkMyungjo-Bd;
  font-size: 1.25rem;
  // color: var(--white-color);
  font-weight: 700;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const _thumbnailHeight = 300
const _thumbnailWidth = 300

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
];

const Gallery = () => {
  return (
    <Wrapper id="gallery_wrapper">
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>우리의 아름다운 순간</Title>
      </Divider>
      <div>
        {/* <styled.image img src={GalleryPhoto1}/> */}
      </div>
      <ImageGallery
        // styled = {outerWidth = 50%}
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
        marginBottom = "500px"
      />
    </Wrapper>
  );
};

export default Gallery;

