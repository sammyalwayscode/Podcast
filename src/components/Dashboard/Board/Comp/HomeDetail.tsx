import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import styled from "styled-components";

const HomeDetail = () => {
  return (
    <Container>
      <Wrapper>
        <PoscastCover>
          <CoverHold>
            <CoverImg>
              <img src="/image/zxx.jpg" alt="" />
            </CoverImg>
            <CoverDetails>
              <small>Love</small>
              <CoverTitle>Love, A Beautiful Thing</CoverTitle>
              <MiniDetails>
                Olorunda Samuel | 2023 | 10 recordings | 293 Minutes
              </MiniDetails>
            </CoverDetails>
          </CoverHold>
        </PoscastCover>
        <AudioCtrls>
          <audio src=""></audio>
          audios
        </AudioCtrls>
        <OtherAudios>
          <OtherPodCard>
            <TitleAuth>
              <OtherTit>The Evolution of the Gentiles</OtherTit>
              <small>Olorunda Samuel</small>
            </TitleAuth>
            <AudioMinutes>10:20</AudioMinutes>
          </OtherPodCard>
          <OtherPodCard>
            <TitleAuth>
              <OtherTit>The Evolution of the Gentiles</OtherTit>
              <small>Olorunda Samuel</small>
            </TitleAuth>
            <AudioMinutes>10:20</AudioMinutes>
          </OtherPodCard>
          <OtherPodCard>
            <TitleAuth>
              <OtherTit>The Evolution of the Gentiles</OtherTit>
              <small>Olorunda Samuel</small>
            </TitleAuth>
            <AudioMinutes>10:20</AudioMinutes>
          </OtherPodCard>
        </OtherAudios>
      </Wrapper>
    </Container>
  );
};

export default HomeDetail;

const Container = styled.div`
  min-height: calc(100vh - 50px);
  height: 100%;
  width: 100vw;
  margin-top: 50px;
  width: calc(100vw - 180px);
  margin-left: 180px;
  display: flex;
  justify-content: center;

  h2 {
    margin: 10px 35px;
    font-weight: 800;
  }
  @media (max-width: 500px) {
    margin-left: 0;
    width: 100vw;
  }
`;
const Wrapper = styled.div`
  width: 100vw;
  /* @media (max-width: 1150px) {
    width: 95%;
  } */
`;

const PoscastCover = styled.div`
  height: 300px;
  background-color: darkorange;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CoverHold = styled.div`
  width: 92%;
  display: flex;
  /* background-color: #2f638f; */
  align-items: flex-end;
`;
const CoverImg = styled.div`
  height: 200px;
  width: 200px;
  /* background-color: darkorchid; */
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const CoverDetails = styled.div`
  height: 100px;
  width: 80%;
  /* background-color: darkgrey; */
  margin-left: 20px;

  small {
    font-weight: lighter;
    font-size: 10px;
  }
`;

const CoverTitle = styled.div`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 10px;
`;
const MiniDetails = styled.div`
  font-size: 12px;
`;

const AudioCtrls = styled.div`
  margin-bottom: 20px;
`;
const OtherAudios = styled.div`
  margin: 0 10px;
`;
const OtherPodCard = styled.div`
  width: 100%;
  /* background-color: aliceblue; */
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgray;
  margin-bottom: 8px;
`;
const TitleAuth = styled.div`
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 5px;

  small {
    font-size: 10px;
    font-weight: 500;
  }
`;
const OtherTit = styled.div``;
const AudioMinutes = styled.div`
  font-size: 12px;
  font-weight: bold;
`;
