import React from "react";
import styled from "styled-components";
import Main2 from "../assets/main2.jpg";
import cross from "../assets/cross_icon.png";
import SizeContext from "antd/lib/config-provider/SizeContext";
// import { Divider } from "antd";
// import {
//   GROOM_NAME,
//   GROOM_FATHER_NAME,
//   GROOM_MOTHER_NAME,
//   BRIDE_NAME,
//   BRIDE_FATHER_NAME,
//   BRIDE_MOTHER_NAME,
// } from "../../config";


const Wrapper = styled.div`
  padding-top: 20px;
  // margin: 16px;
  width: 100%;
`;


const Title = styled.p`
  font-family : 'JejuMyeongjo';
  font-size: 1.25rem;
  // color: var(--white-color);
  font-weight: 700;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;


const Content = styled.p`
  font-size: 0.865rem;
  line-height: 1.75;
  opacity: 0.75;
  // margin-bottom: 20px;
  width: 100%;
  text-align: center;
  font-family: 'JejuMyeongjo'
  // font-family: Ownglyph_ryuttung-Rg
`;



const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
  padding-bottom: 30px;
`;

const main_name = () => {
  return (
    <Wrapper>
      {/* <Divider style={{ marginTop: 32, marginBottom: 32 }} plain>
        <Title data-aos="fade-up">Happy Wedding Worship</Title>
      </Divider> */}
      <Image data-aos="fade-up" src={Main2} />
      <Content data-aos="fade-up">
        <br />
        <br />
        <span style={{color:"#003366", fontFamily:'BookkMyungjo-Bd'}}>고광호</span> · <span style={{color:"#003366", fontFamily:"BookkMyungjo-Bd"}}>김효정</span>  장남  <span style={{color:"#003366", fontFamily:"BookkMyungjo-Bd"}}>고동영</span> 
        <br />
        <span style={{color:"#003366", fontFamily:'BookkMyungjo-Bd'}} >이창덕</span> · <span style={{color:"#003366", fontFamily:"BookkMyungjo-Bd"}}>이세원</span>  차녀  <span style={{color:"#003366", fontFamily:"BookkMyungjo-Bd"}}>이다운</span> 
        <br />
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

export default main_name;
