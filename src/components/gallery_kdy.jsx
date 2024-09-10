import React, { useState } from "react";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Divider } from "antd";
import styled from "styled-components";
import "./gallery.css";
import GalleryPhoto1 from "../assets/Gallery_Photo_1.webp";
import GalleryPhoto2 from "../assets/Gallery_Photo_2.webp";
import GalleryPhoto3 from "../assets/Gallery_Photo_3.webp";
import GalleryPhoto4 from "../assets/Gallery_Photo_4.webp";
import GalleryPhoto5 from "../assets/Gallery_Photo_5.webp";
import GalleryPhoto6 from "../assets/Gallery_Photo_6.webp";

const Wrapper = styled.div`
  background: #ffffff;
  padding-top: 30px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
const Title = styled.p`
  font-family: BookkMyungjo-Bd;
  font-size: 1.25rem;
  // color: var(--white-color);
  font-weight: 700;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const IMAGES = [
  GalleryPhoto1,
  GalleryPhoto2,
  GalleryPhoto3,
  GalleryPhoto4,
  GalleryPhoto5,
  GalleryPhoto6,
];

const img_len = IMAGES.length -1;
console.log(img_len)

const ReactImageGallery = () => {
  const [data, setData] = useState({ img: "", i: 0 });

  const viewImage = (img, i) => {
    setData({ img, i });
  };

  const imageAction = (action) => {
    
    let i = data.i;  
    if (action === "next-img") {
      if(i === img_len){
        setData({ img: IMAGES[0], i: 0 });
      } else {
      setData({ img: IMAGES[i + 1], i: i + 1 });
      }
    }
    if (action === "previous-img") {
      if (data.i===0){        
        setData({ img: IMAGES[img_len], i: img_len });
      } else  {
      setData({ img: IMAGES[i - 1], i: i - 1 });
    }
  }
    if (!action) {
      setData({ img: "", i: 0 });
    }

  };
  
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
    <Title>우리의 아름다운 순간</Title>
  </Divider>
      {data.img && (
        <div className="modal-container">  
          <button
            onClick={() => imageAction()}
            style={{position: 'fixed', top: "10px", right: "10px" }}>X</button>
          <button onClick={() => imageAction("previous-img")}>◀</button>
          <img
            src={data.img}
            style={{ width: "auto", maxWidth: "80%", maxHeight: "90%" }}
          />
          <button onClick={() => imageAction("next-img")}>▶</button>
        </div>
      )}

      <div className="grid-container">
        {IMAGES.map((image, i) => (
          <img key={i} src={image} onClick={() => viewImage(image, i)} />
        ))}
      </div>
    </Wrapper>
  );
};

export default ReactImageGallery;
