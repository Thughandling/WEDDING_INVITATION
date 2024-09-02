import React from "react";
import styled from "styled-components";
// import { Divider } from "antd";
// import {
//   GROOM_NAME,
//   GROOM_FATHER_NAME,
//   GROOM_MOTHER_NAME,
//   BRIDE_NAME,
//   BRIDE_FATHER_NAME,
//   BRIDE_MOTHER_NAME,
// } from "../../config";
// import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
  padding-top: 20px;
  // margin: 16px;
  width: 100%;
`;


const Title = styled.p`
  font-family : BookkMyungjo-Bd;
  font-size: 1.25rem;
  // color: var(--white-color);
  font-weight: 700;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;


const Content = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  opacity: 0.75;
  // margin-bottom: 20px;
  width: 100%;
  text-align: center;
  // font-family: BookkMyungjo-Bd
  font-family: Ownglyph_ryuttung-Rg
`;

// const GroomBride = styled.p`
//   font-size: 0.875rem;
//   line-height: 1.75;
//   opacity: 0.85;
//   margin-bottom: 0px;
//   width: 100%;
//   text-align: center;
// `;

// const Image = styled.img`
//   display: block;
//   margin: 0 auto;
//   width: 1.375rem;
//   padding-bottom: 42px;
// `;

const Greeting = () => {
  return (
    <Wrapper>
      {/* <Divider style={{ marginTop: 32, marginBottom: 32 }} plain>
        <Title data-aos="fade-up">Happy Wedding Worship</Title>
      </Divider> */}
      {/* <Image data-aos="fade-up" src={Flower} /> */}
      <Content data-aos="fade-up">
        홀로 높아지기 보단 함께 낮아지길 소망하는
        <br />
        두 사람이 하나되어 믿음의 길을 걸어가고자 합니다
        <br />
        <br />
        마음을 <span style={{color:"#003366", fontFamily:"BookkMyungjo-Bd"}}>다</span>하여 사랑할 <span style={{color:"#003366", fontFamily:"BookkMyungjo-Bd"}}>운</span>명을 만나
        <br />
        서로의 <span style={{color:"#003366", fontFamily:"BookkMyungjo-Bd"}}>동</span>역자로 <span style={{color:"#003366", fontFamily:"BookkMyungjo-Bd"}}>영</span>원을 약속하는 날
        <br />
        <br />
        따뜻한 발걸음 해주시어
        <br />
        자리를 빛내주시면 감사하겠습니다
        <br />
        <br />
        {/* <span style={{color:"003366", fontFamily:"BookkMyungjo-Bd", fontSize:"1.25rem"}}>
        무엇보다 뜨겁게 서로 사랑할지니
        <br />
        사랑은 허다한 죄를 덮느니라
        </span>
        <br />
        베드로 전서 4장 8절
        <br /> */}
      </Content>
      {/* <GroomBride data-aos="fade-up">
        {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}의 장남 {GROOM_NAME}
        <br />
        {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}의 장녀 {BRIDE_NAME}
      </GroomBride> */}
    </Wrapper>
  );
};

export default Greeting;
