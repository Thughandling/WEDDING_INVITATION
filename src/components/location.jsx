import React, { useEffect } from "react";
import { Divider } from "antd";
import styled from "styled-components";
import Flower from "../assets/flower2.png";

const Wrapper = styled.div`
  padding-top: 50px;
  width: 70%;
  margin: 0 auto;
`;
// 
// const Title = styled.p`
//   font-family : BookkMyungjo-Bd;
//   font-size: 1.25rem;
//   // color: var(--white-color);
//   font-weight: 700;
//   opacity: 0.85;
//   margin-bottom: 0;
//   text-align: center;
// `;
const Title = styled.span`
  font-family : BookkMyungjo-Bd;
  font-size: 1rem;
  color: #00712D;
  font-weight: 700;
  // opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Content = styled.p`
  font-family : BookkMyungjo-Bd;
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.9;
  width: 100%;
  text-align: center;
  padding-top: 42px;
  padding-bottom: 42px;
  margin: 0;
`;

const Map = styled.div`
  width: 100%;
  padding: 0;
`;

const Location = () => {
  // 카카오 맵 불러오기

  // <!-- 3. 실행 스크립트 -->
  const executeScript = () => {
    const scriptTag = document.createElement("script");
    const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
    "timestamp" : "1721890068502",
    "key" : "2k6e4",
    "mapWidth" : "640",
    "mapHeight" : "360"
  }).render();`);
    scriptTag.appendChild(inlineScript);
    document.body.appendChild(scriptTag);
  };

  // <!-- 2. 설치 스크립트 * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다. -->
  // document.write 문제가 발생해서 해당 파일을 직접 가져온다음 수정했음
  const InstallScript = () => {
    (function () {
      let c = window.location.protocol === "https:" ? "https:" : "http:";
      let a = "16137cec";

      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) {
        return;
      }
      window.daum = window.daum || {};
      window.daum.roughmap = {
        cdn: a,
        URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
        url_protocal: c,
      };
      let b =
        c +
        "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" +
        a +
        "/roughmapLander.js";

      // document.write -> doumnet.body.append로 수정
      const scriptTag = document.createElement("script");
      scriptTag.src = b;
      document.body.append(scriptTag);
      scriptTag.onload = () => {
        executeScript();
      };
    })();
  };

  useEffect(() => {
    InstallScript();
  }, [InstallScript]);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      <Image src={Flower} />
      <Map
        id="daumRoughmapContainer1721890068502"
        className="root_daum_roughmap root_daum_roughmap_landing"
      ></Map>
      <Content>
        서울 관악구 남부순환로 1440
        <br />
        그레이스 파티 7층
        <br />
        <br />
        <Title>셔틀 버스</Title>
        <br />
        <br />
        !!셔틀!! 신림역 5번 출구 앞
        <br />
        그레이스 파티 예식장 하차
        <br />
        <br />
        <Title>지하철 이용시</Title>
        <br />
        <br />
        2호선 신대방역 (도보 20분)
      </Content>
    </Wrapper>
  );
};

export default Location;
