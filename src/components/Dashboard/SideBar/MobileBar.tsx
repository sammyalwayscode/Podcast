import React, { useContext } from "react";
import { AiOutlineHeart, AiOutlineLogout } from "react-icons/ai";
import { BiCategory, BiHomeSmile } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { IoLibraryOutline } from "react-icons/io5";
import styled from "styled-components";
import { GlobalContext } from "../../Global/ContexState";

const MobileBar = () => {
  const globalValue = useContext(GlobalContext);

  return (
    <>
      {globalValue?.mobileToggle ? (
        <Container>
          <Wrapper>
            <TopNavigations>
              <Navs>
                <Icons>
                  <BiHomeSmile />
                </Icons>
                <span>Home</span>
              </Navs>
              <Navs>
                <Icons>
                  <FiSearch />
                </Icons>
                <span>Search</span>
              </Navs>
              <Navs>
                <Icons>
                  <IoLibraryOutline />
                </Icons>
                <span>Your Library</span>
              </Navs>
              <Navs>
                <Icons>
                  <AiOutlineHeart />
                </Icons>
                <span>Favourites</span>
              </Navs>
              <Navs>
                <Icons>
                  <BiCategory />
                </Icons>
                <span>Categories</span>
              </Navs>
            </TopNavigations>

            <ButtomNavigation>
              <Navs>
                <Icons>
                  <AiOutlineLogout />
                </Icons>
                <span>Log Out</span>
              </Navs>
            </ButtomNavigation>
          </Wrapper>
        </Container>
      ) : null}
    </>
  );
};

export default MobileBar;

const Container = styled.div`
  display: none;
  @media (max-width: 500px) {
    display: block;
    width: 200px;
    height: 100vh;
    background-color: #000;
    margin-top: 50px;
    position: fixed;
    display: flex;
    justify-content: center;
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

const Navs = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0;
  color: #a7a79b;
  transition: all 350ms;
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
