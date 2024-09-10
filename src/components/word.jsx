import React from "react";
import styled from "styled-components";
import Flower from "../assets/flower2.png";

const Wrapper = styled.div`
  padding-top: 40px;
  // margin: 16px;
  height: max-content;
  width: 100%;
  height: 100vh;
`;


const Content = styled.p`
  width : center;
  height: max-content;
  font-size: 0.865rem;
  line-height: 2.75;
  opacity: 0.75;
  // margin-bottom: 20px;
  // width: 100%;
  text-align: center;
  font-family: BookkMyungjo-Bd
  // font-family: Ownglyph_ryuttung-Rg
`;


const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Word = () => {
  return (
    <Wrapper>
      <Image src={Flower} />
      <Content data-aos="fade-up">
        <span style={{color:"003366", fontFamily:"BookkMyungjo-Bd", fontSize:"1.25rem"}}>
        무엇보다 뜨겁게 서로 사랑할지니
        <br />
        사랑은 허다한 죄를 덮느니라
        </span>
        <br />
        베드로 전서 4장 8절
        <br />
      </Content>
    </Wrapper>
  );
};

export default Word;
