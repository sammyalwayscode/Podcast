import React from "react";
import { AiFillHeart } from "react-icons/ai";
import styled from "styled-components";

const Favourites = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Your Favourite Podcast</Title>
        <FavouriteCardHold>
          <FavouriteCard>
            <ImageAuthor>
              <FavImg>
                <img src="/image/tst1.jpeg" alt="" />
              </FavImg>
              <TitleAuthorHold>
                <FavouriteTitle>How to save a Planet</FavouriteTitle>
                <Author>Yasmine Booker</Author>
              </TitleAuthorHold>
            </ImageAuthor>
            <FavIcon>
              <AiFillHeart />
            </FavIcon>
          </FavouriteCard>
          <FavouriteCard>
            <ImageAuthor>
              <FavImg>
                <img src="/image/tst1.jpeg" alt="" />
              </FavImg>
              <TitleAuthorHold>
                <FavouriteTitle>How to save a Planet</FavouriteTitle>
                <Author>Yasmine Booker</Author>
              </TitleAuthorHold>
            </ImageAuthor>
            <FavIcon>
              <AiFillHeart />
            </FavIcon>
          </FavouriteCard>
          <FavouriteCard>
            <ImageAuthor>
              <FavImg>
                <img src="/image/tst1.jpeg" alt="" />
              </FavImg>
              <TitleAuthorHold>
                <FavouriteTitle>How to save a Planet</FavouriteTitle>
                <Author>Yasmine Booker</Author>
              </TitleAuthorHold>
            </ImageAuthor>
            <FavIcon>
              <AiFillHeart />
            </FavIcon>
          </FavouriteCard>
        </FavouriteCardHold>
      </Wrapper>
    </Container>
  );
};

export default Favourites;

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
const FavouriteCardHold = styled.div``;
const FavouriteCard = styled.div`
  height: 60px;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid #606060;
  border-radius: 4px;
  margin-bottom: 10px;
`;
const ImageAuthor = styled.div`
  display: flex;
  align-items: center;
`;
const FavImg = styled.div`
  height: 50px;
  width: 50px;
  margin-left: 5px;
  border-radius: 4px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
`;
const TitleAuthorHold = styled.div`
  margin: 0 10px;
`;
const FavouriteTitle = styled.div`
  font-weight: 600;
`;
const Author = styled.div`
  font-size: 10px;
  color: #a7a79b;
`;
const FavIcon = styled.div`
  margin: 0 12px;
  font-size: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
