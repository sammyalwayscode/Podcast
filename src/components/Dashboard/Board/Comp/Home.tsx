import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <h2>All Podcast</h2>
      <Wrapper>
        <Card>
          <CardImg>
            <img src="/image/trr.jpg" alt="" />
          </CardImg>
          <CardText>
            <Title>How to save a Planet</Title>
            <Author>by Yasmine Booker</Author>
          </CardText>
        </Card>
        <Card>
          <CardImg>
            <img src="/image/trr.jpg" alt="" />
          </CardImg>
          <CardText>
            <Title>How to save a Planet</Title>
            <Author>by Yasmine Booker</Author>
          </CardText>
        </Card>
        <Card>
          <CardImg>
            <img src="/image/trr.jpg" alt="" />
          </CardImg>
          <CardText>
            <Title>How to save a Planet</Title>
            <Author>by Yasmine Booker</Author>
          </CardText>
        </Card>
        <Card>
          <CardImg>
            <img src="/image/trr.jpg" alt="" />
          </CardImg>
          <CardText>
            <Title>How to save a Planet</Title>
            <Author>by Yasmine Booker</Author>
          </CardText>
        </Card>
        <Card>
          <CardImg>
            <img src="/image/trr.jpg" alt="" />
          </CardImg>
          <CardText>
            <Title>How to save a Planet</Title>
            <Author>by Yasmine Booker</Author>
          </CardText>
        </Card>
        <Card>
          <CardImg>
            <img src="/image/trr.jpg" alt="" />
          </CardImg>
          <CardText>
            <Title>How to save a Planet</Title>
            <Author>by Yasmine Booker</Author>
          </CardText>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  min-height: calc(100vh - 50px);
  height: 100%;
  margin-top: 50px;
  width: calc(100vw - 180px);
  margin-left: 180px;
  display: flex;
  justify-content: center;
  flex-direction: column;

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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 1150px) {
    width: 95%;
  }
`;

const Card = styled.div`
  width: 200px;
  transition: all 350ms;
  margin: 10px;
`;

const CardImg = styled.div`
  height: 200px;
  width: 200px;
  background-color: #282828;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  margin-bottom: 10px;

  img {
    width: 95%;
    height: 95%;
    object-fit: cover;
    border-radius: 7px;
  }
`;
const CardText = styled.div``;
const Title = styled.div`
  font-weight: bold;
  font-size: 15px;
`;
const Author = styled.div`
  font-size: 11px;
  color: #a7a79b;
`;
