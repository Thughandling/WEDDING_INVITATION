import React, { useState, useCallback } from "react";
import "./styles.css";
import Gallery from "react-photo-gallery";
import FadeIn from "react-fade-in";
import Carousel, { Modal, ModalGateway } from "react-images";

import GalleryPhoto1 from "../assets/Gallery_Photo_1.webp";
import GalleryPhoto2 from "../assets/Gallery_Photo_2.webp";
import GalleryPhoto3 from "../assets/Gallery_Photo_3.webp";
import GalleryPhoto4 from "../assets/Gallery_Photo_4.webp";
import GalleryPhoto5 from "../assets/Gallery_Photo_5.webp";
import GalleryPhoto6 from "../assets/Gallery_Photo_6.webp";

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <FadeIn>
      <div className="homeContainer">
        <h1 className="galleryTitle">Gallery</h1>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </FadeIn>
  );
}

export const photos = [
  
  {
    src: GalleryPhoto1,
    width: 4,
    height: 3

    // thumbnail: GalleryPhoto1,
  },
  {
    src: GalleryPhoto2,
    width: 4,
    height: 3

    // thumbnail: GalleryPhoto2,
  },
  {
    src: GalleryPhoto3,
    width: 4,
    height: 3

    // thumbnail: GalleryPhoto3,

  },
  {
    src: GalleryPhoto4,
    width: 4,
    height: 3

    // thumbnail: GalleryPhoto4,
  },
  {
    src: GalleryPhoto5,
    width: 4,
    height: 3

    // thumbnail: GalleryPhoto5,

  },
  {
    src: GalleryPhoto6,
    width: 4,
    height: 3

    // thumbnail: GalleryPhoto6,
  },
];

// const photos = [
//   {
//     src: "/Images/2.jpg",
//     width: 4,
//     height: 3
//   },
//   {
//     src: "/Images/3.jpg",
//     width: 1,
//     height: 1
//   },
//   {
//     src: "/Images/4.jpg",
//     width: 4,
//     height: 3
//   },
//   {
//     src: "/Images/8.jpg",
//     width: 4,
//     height: 3
//   },
//   {
//     src: "/Images/21.jpg",
//     width: 4,
//     height: 3
//   },
//   {
//     src: "/Images/22.jpg",
//     width: 4,
//     height: 3
//   },
//   {
//     src: "/Images/24.jpg",
//     width: 4,
//     height: 3
//   },
//   {
//     src: "/Images/25.jpg",
//     width: 4,
//     height: 3
//   },
//   {
//     src: "/Images/26.jpg",
//     width: 4,
//     height: 3
//   },
//   {
//     src: "/Images/28.jpg",
//     width: 4,
//     height: 3
//   },
//   {
//     src: "/Images/31.jpg",
//     width: 4,
//     height: 3
//   },
//   {
//     src: "/Images/42.jpg",
//     width: 4,
//     height: 3
//   }
// ];
