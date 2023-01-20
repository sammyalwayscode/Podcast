import React from "react";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";

const Search = () => {
  return (
    <Container>
      <Wrapper>
        <TopSearch>
          <Title>Make Your Search</Title>
          <SearchBar>
            <FiSearch size="20px" color="gray" />
            <input
              type="search"
              placeholder="Search Your Favorite Podcast..."
            />
            <button>Search</button>
          </SearchBar>
        </TopSearch>
        <SearchData>
          {/* <EmptySearch>
            <ImageHold>
              <img src="/image/search.svg" alt="" />
            </ImageHold>
            <Message>
              Empty Search Result, Search a Podcast in the Search Bar Above
            </Message>
          </EmptySearch> */}

          <DataSearch>
            <Card>
              <CardImg>
                <img src="/image/trr.jpg" alt="" />
              </CardImg>
              <CardText>
                <CardTitle>How to save a Planet</CardTitle>
                <Author>by Yasmine Booker</Author>
              </CardText>
            </Card>
            <Card>
              <CardImg>
                <img src="/image/trr.jpg" alt="" />
              </CardImg>
              <CardText>
                <CardTitle>How to save a Planet</CardTitle>
                <Author>by Yasmine Booker</Author>
              </CardText>
            </Card>
            <Card>
              <CardImg>
                <img src="/image/trr.jpg" alt="" />
              </CardImg>
              <CardText>
                <CardTitle>How to save a Planet</CardTitle>
                <Author>by Yasmine Booker</Author>
              </CardText>
            </Card>
            <Card>
              <CardImg>
                <img src="/image/trr.jpg" alt="" />
              </CardImg>
              <CardText>
                <CardTitle>How to save a Planet</CardTitle>
                <Author>by Yasmine Booker</Author>
              </CardText>
            </Card>
            <Card>
              <CardImg>
                <img src="/image/trr.jpg" alt="" />
              </CardImg>
              <CardText>
                <CardTitle>How to save a Planet</CardTitle>
                <Author>by Yasmine Booker</Author>
              </CardText>
            </Card>
            <Card>
              <CardImg>
                <img src="/image/trr.jpg" alt="" />
              </CardImg>
              <CardText>
                <CardTitle>How to save a Planet</CardTitle>
                <Author>by Yasmine Booker</Author>
              </CardText>
            </Card>
            <Card>
              <CardImg>
                <img src="/image/trr.jpg" alt="" />
              </CardImg>
              <CardText>
                <CardTitle>How to save a Planet</CardTitle>
                <Author>by Yasmine Booker</Author>
              </CardText>
            </Card>
          </DataSearch>
        </SearchData>
      </Wrapper>
    </Container>
  );
};

export default Search;

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

const TopSearch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin: 10px 0;
`;
const SearchBar = styled.div`
  width: 450px;
  height: 40px;
  background-color: #fff;
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 0 3px 0 10px;
  @media (max-width: 450px) {
    width: 95%;
  }

  input {
    height: 100%;
    width: 100%;
    font-family: Montserrat;
    outline: none;
    border: none;
    background-color: transparent;
  }
  button {
    height: 90%;
    width: 120px;
    border-radius: 50px;
    font-family: Montserrat;
    background-color: #4285f4;
    color: #fff;
    font-weight: bold;
    border: none;
    outline: none;
    transition: 350ms;
    cursor: pointer;
    :hover {
      transform: scale(0.96);
    }
  }
`;
const SearchData = styled.div``;
const EmptySearch = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 200px;
  }
`;

const ImageHold = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: #585858;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const Message = styled.div`
  font-size: 13px;
  text-align: center;
`;

const DataSearch = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
const CardTitle = styled.div`
  font-weight: bold;
  font-size: 15px;
`;
const Author = styled.div`
  font-size: 11px;
  color: #a7a79b;
`;
