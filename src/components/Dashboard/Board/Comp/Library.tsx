import React from "react";
import styled from "styled-components";

const Library = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Your Libuary</Title>
        <LibraryHold>
          <LibraryCard>
            <LibuaryCover>
              <img src="" alt="" />
            </LibuaryCover>
            <LibuaryTitle>Insprational Podcast</LibuaryTitle>
            <LibuarySub>By Olorunda Samuel</LibuarySub>
          </LibraryCard>
          <LibraryCard>
            <LibuaryCover>
              <img src="" alt="" />
            </LibuaryCover>
            <LibuaryTitle>Insprational Podcast</LibuaryTitle>
            <LibuarySub>By Olorunda Samuel</LibuarySub>
          </LibraryCard>
          <LibraryCard>
            <LibuaryCover>
              <img src="" alt="" />
            </LibuaryCover>
            <LibuaryTitle>Insprational Podcast</LibuaryTitle>
            <LibuarySub>By Olorunda Samuel</LibuarySub>
          </LibraryCard>
          <LibraryCard>
            <LibuaryCover>
              <img src="" alt="" />
            </LibuaryCover>
            <LibuaryTitle>Insprational Podcast</LibuaryTitle>
            <LibuarySub>By Olorunda Samuel</LibuarySub>
          </LibraryCard>
          <LibraryCard>
            <LibuaryCover>
              <img src="" alt="" />
            </LibuaryCover>
            <LibuaryTitle>Insprational Podcast</LibuaryTitle>
            <LibuarySub>By Olorunda Samuel</LibuarySub>
          </LibraryCard>
        </LibraryHold>
      </Wrapper>
    </Container>
  );
};

export default Library;

const Container = styled.div`
  min-height: calc(100vh - 50px);
  height: 100%;
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
  width: 1150px;
  @media (max-width: 1150px) {
    width: 95%;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin: 10px 0;
`;
const LibraryHold = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const LibraryCard = styled.div`
  height: 270px;
  width: 200px;
  background-color: #0e0e0e;
  border-radius: 4px;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;
const LibuaryCover = styled.div`
  height: 162px;
  width: 162px;
  background-color: #1f1f1f;
  margin-top: 17px;
`;
const LibuaryTitle = styled.div`
  margin: 10px;
  font-size: 13px;
  font-weight: 700;
  /* background-color: red; */
  width: 162px;
`;
const LibuarySub = styled.div`
  width: 162px;
  font-size: 10px;
  color: #a7a79b;
`;
