import React, { useState } from "react";
import "./gallery.css";

// import ImageGallery from "react-image-gallery";
// import Gallery from "react-photo-gallery";
import { Carousel, Divider, Modal } from "antd";
import styled from "styled-components";

import GalleryPhoto1 from "../assets/Gallery_Photo_1.webp";
import GalleryPhoto2 from "../assets/Gallery_Photo_2.webp";
import GalleryPhoto3 from "../assets/Gallery_Photo_3.webp";
import GalleryPhoto4 from "../assets/Gallery_Photo_4.webp";
import GalleryPhoto5 from "../assets/Gallery_Photo_5.webp";
import GalleryPhoto6 from "../assets/Gallery_Photo_6.webp";
import SizeContext from "antd/lib/config-provider/SizeContext";

const Wrapper = styled.div`
  background: #ffffff;
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
  font-family: BookkMyungjo-Bd;
  font-size: 1.25rem;
  // color: var(--white-color);
  font-weight: 700;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

// const _thumbnailHeight = 300
// const _thumbnailWidth = 300

// export const Photo = [

//   {
//     src: GalleryPhoto1,
//     width: 4,
//     height: 3

//     // thumbnail: GalleryPhoto1,
//   },
//   {
//     src: GalleryPhoto2,
//     width: 4,
//     height: 3

//     // thumbnail: GalleryPhoto2,
//   },
//   {
//     src: GalleryPhoto3,
//     width: 4,
//     height: 3

//     // thumbnail: GalleryPhoto3,

//   },
//   {
//     src: GalleryPhoto4,
//     width: 4,
//     height: 3

//     // thumbnail: GalleryPhoto4,
//   },
//   {
//     src: GalleryPhoto5,
//     width: 4,
//     height: 3

//     // thumbnail: GalleryPhoto5,

//   },
//   {
//     src: GalleryPhoto6,
//     width: 4,
//     height: 3

//     // thumbnail: GalleryPhoto6,
//   },
// ];

const IMAGES = [
  {
    id: "1",
    src: GalleryPhoto1,
    subImages: [GalleryPhoto2, GalleryPhoto3],
  },
  {
    id: "2",
    src: GalleryPhoto2,
    subImages: [GalleryPhoto3,GalleryPhoto4],
  },
  {
    id: "3",
    src: GalleryPhoto3,
    subImages: [GalleryPhoto4,GalleryPhoto5],
  },
  {
    id: "4",
    src: GalleryPhoto4,
    subImages: [GalleryPhoto5,GalleryPhoto6],
  },
  {
    id: "5",
    src: GalleryPhoto5,
    subImages: [],
  },
  {
    id: "6",
    src: GalleryPhoto6,
    subImages: [],
  },
];

const Gallery_kdy = () => {
  const [currentImage, setCurrentImage] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOk = () => {
    setIsOpenModal(false);
  };

  const handleCancel = () => {
    setIsOpenModal(false);
  };

  return (
    <Wrapper id="gallery_wrapper">
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>우리의 아름다운 순간</Title>
      </Divider>

      <div className="grid-container">
        
        {IMAGES.map((image) => (
          <img
            key={image.id}
            src={image.src}
            onClick={() => {
              setCurrentImage(image);
              // console.log(image);
              setIsOpenModal(true);
            }}
          />
        ))}
      </div>
      {undefined === null}

      <Modal open={isOpenModal} onOk={handleOk} onCancel={handleCancel}>
        <Carousel arrows infinite={false}>
          <img
            src={currentImage?.src}
            style={{ width: "100%", height: "100%" }}
          />
          {currentImage?.subImages.map((image) => (
            <img src={image} style={{ width: "100%", height: "100%" }} />
          ))}
        </Carousel>
      </Modal>
    </Wrapper>
  );
};

export default Gallery_kdy;

{
  /* <Gallery photos={Photo} /> */
}
{
  /* <img src={GalleryPhoto1} /> */
}

{
  /* <ImageGallery
        // styled = {outerWidth = 50%}
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
        marginBottom = "500px"
      /> */
}
