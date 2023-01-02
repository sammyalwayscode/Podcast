import React from "react";
import styled from "styled-components";
import { BiCategory, BiHomeSmile } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { IoLibraryOutline } from "react-icons/io5";
import { AiOutlineHeart, AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";

const Desktop = () => {
  return (
    <Container>
      <Wrapper>
        <TopNavigations>
          <Navs to="/home">
            <Icons>
              <BiHomeSmile />
            </Icons>
            <span>Home</span>
          </Navs>
          <Navs to="/search">
            <Icons>
              <FiSearch />
            </Icons>
            <span>Search</span>
          </Navs>
          <Navs to="/library">
            <Icons>
              <IoLibraryOutline />
            </Icons>
            <span>Your Library</span>
          </Navs>
          <Navs to="/favourites">
            <Icons>
              <AiOutlineHeart />
            </Icons>
            <span>Favourites</span>
          </Navs>
          <Navs to="/categories">
            <Icons>
              <BiCategory />
            </Icons>
            <span>Categories</span>
          </Navs>
        </TopNavigations>

        <ButtomNavigation>
          <Navs to="/home">
            <Icons>
              <AiOutlineLogout />
            </Icons>
            <span>Log Out</span>
          </Navs>
        </ButtomNavigation>
      </Wrapper>
    </Container>
  );
};

export default Desktop;

const Container = styled.div`
  height: 100vh;
  width: 180px;
  background-color: #000;
  margin-top: 50px;
  position: fixed;
  display: flex;
  justify-content: center;
  @media (max-width: 500px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopNavigations = styled.div``;
const ButtomNavigation = styled.div`
  height: 100px;
  /* background-color: darkblue; */
`;

const Navs = styled(Link)`
  display: flex;
  align-items: center;
  margin: 12px 0;
  color: #a7a79b;
  transition: all 350ms;
  text-decoration: none;
  cursor: pointer;
  :hover {
    color: #fff;
    transform: scale(0.97);
  }
  span {
    font-weight: 700;
    margin: 0 10px;
    font-size: 13px;
  }
`;
const Icons = styled.div`
  font-size: 20px;
`;
