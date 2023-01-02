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
        <SearchData>Card</SearchData>
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

const TopSearch = styled.div``;
const Title = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 20px;
`;
const SearchBar = styled.div`
  width: 350px;
  height: 40px;
  background-color: #fff;
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 0 3px 0 10px;

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
