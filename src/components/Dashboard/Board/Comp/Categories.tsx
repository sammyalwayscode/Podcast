import { url } from "inspector";
import React from "react";
import { BiMusic } from "react-icons/bi";
import styled from "styled-components";

const Categories = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Explore Our Various Categouries</Title>
        <CategoriesCardHold>
          <CategoryCard>
            <Cover style={{ backgroundImage: `url("/image/zxx.jpg")` }}>
              <CoverIcon>
                <BiMusic />
              </CoverIcon>
            </Cover>
            <CategoryTitle>
              <div>Music</div>
            </CategoryTitle>
          </CategoryCard>
          <CategoryCard>
            <Cover style={{ backgroundImage: `url("/image/zxx.jpg")` }}>
              <CoverIcon>
                <BiMusic />
              </CoverIcon>
            </Cover>
            <CategoryTitle>
              <div>Music</div>
            </CategoryTitle>
          </CategoryCard>
          <CategoryCard>
            <Cover style={{ backgroundImage: `url("/image/zxx.jpg")` }}>
              <CoverIcon>
                <BiMusic />
              </CoverIcon>
            </Cover>
            <CategoryTitle>
              <div>Music</div>
            </CategoryTitle>
          </CategoryCard>
          <CategoryCard>
            <Cover style={{ backgroundImage: `url("/image/zxx.jpg")` }}>
              <CoverIcon>
                <BiMusic />
              </CoverIcon>
            </Cover>
            <CategoryTitle>
              <div>Music</div>
            </CategoryTitle>
          </CategoryCard>
          <CategoryCard>
            <Cover style={{ backgroundImage: `url("/image/zxx.jpg")` }}>
              <CoverIcon>
                <BiMusic />
              </CoverIcon>
            </Cover>
            <CategoryTitle>
              <div>Music</div>
            </CategoryTitle>
          </CategoryCard>
          <CategoryCard>
            <Cover style={{ backgroundImage: `url("/image/zxx.jpg")` }}>
              <CoverIcon>
                <BiMusic />
              </CoverIcon>
            </Cover>
            <CategoryTitle>
              <div>Music</div>
            </CategoryTitle>
          </CategoryCard>
        </CategoriesCardHold>
      </Wrapper>
    </Container>
  );
};

export default Categories;

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
const CategoriesCardHold = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const CategoryCard = styled.div`
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

const Cover = styled.div`
  height: 162px;
  width: 162px;
  background-color: #1f1f1f;
  margin-top: 17px;
  background-position: center;
  background-size: cover;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CoverIcon = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
`;

const CategoryTitle = styled.div`
  margin: 10px;
  font-size: 20px;
  font-weight: 700;
  /* background-color: red; */
  width: 162px;
`;
