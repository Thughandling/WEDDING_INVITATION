import React from "react";
import styled from "styled-components";
import {
  WEDDING_DATE,
  WEDDING_LOCATION,
  GROOM_NAME,
  BRIDE_NAME,
} from "../../config.js";
// import BackgroundVideo from "../assets/BackgroundVideo.mp4";
// import BackgroundVideo from "../assets/happy.mp4";
import BackgroundImage from "../assets/main1.jpg";

// import GroovePaper from "../assets/GroovePaper.png";

// console.log(BackgroundImage)


const Layout = styled.div`
  background: #FFFFFF;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: max-content;
  text-align: center;
  padding-top: 42px;
  font-weight: 500 !important;
  color: #00712D;
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
`;

// const VideoBackground = styled.video`
//   width: 50%;
//   height: 50%;
// `;

const WeddingInvitation = styled.p`
  font-family : BookkMyungjo-Bd;
  font-weight : Bd;
  font-size: 1.25rem;
  // opacity: 0.45;
  margin-bottom: 16px;
`;

const GroomBride = styled.p`  
  font-family : BookkMyungjo-Bd;
  font-size: 1.5rem;
  font-weight: bold;
  opacity: 0.9;
  margin-bottom: 16px;
`;

const Schedule = styled.p`
  font-family : BookkMyungjo-bd;
  font-size: 1.0rem;
  // opacity: 0.65;
  margin-bottom: 24px;
`;
// &#128155;
const Title = () => {
  return (
    <Layout>
      <img src={BackgroundImage} style={{width: "100%"}}/>
      <TitleWrapper>
        <WeddingInvitation>WEDDING INVITATION</WeddingInvitation>
        <GroomBride>
          {GROOM_NAME} ♥ {BRIDE_NAME}
        </GroomBride>
        <Schedule>
          {WEDDING_DATE}
          <br />
          {WEDDING_LOCATION}
        </Schedule>
        
        
      </TitleWrapper>
      
      {/* <ImageBackground>
      </ImageBackground> */}
      
      {/* <VideoBackground autoPlay loop muted playsInline={true}>
        <source src={BackgroundVideo} type="video/mp4" />
      </VideoBackground> */}
    </Layout>
  );
};

export default Title;
