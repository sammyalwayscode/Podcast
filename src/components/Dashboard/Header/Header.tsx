import React, { useState, useContext } from "react";
import { GiCancel, GiSoundWaves } from "react-icons/gi";
import styled from "styled-components";
import { GoThreeBars } from "react-icons/go";
import { GlobalContext } from "../../Global/ContexState";

const Header = () => {
  const globalValue = useContext(GlobalContext);

  const togSwitch = () => {
    globalValue?.setMobileToggle(!globalValue?.mobileToggle);
  };
  return (
    <Container>
      <Wrapper>
        <Logo>
          <GiSoundWaves color="#fff" size="30px" />
          ProCast
          {/* <Search>
            <input type="search" name="" id="" />
          </Search> */}
        </Logo>
        <SerchProf>
          <Profile>
            <Name>Olorunda Samuel</Name>
            <Ava>
              <img src="" alt="" />
            </Ava>
          </Profile>
        </SerchProf>
        <BarHold onClick={togSwitch}>
          {globalValue?.mobileToggle ? (
            <GiCancel size="27px" />
          ) : (
            <GoThreeBars size="27px" />
          )}
        </BarHold>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 50px;
  width: 100%;
  background-color: #000;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  margin-right: 30px;
  font-size: 25px;
  font-weight: 800;
  display: flex;
  align-items: center;
`;
const SerchProf = styled.div`
  display: flex;
  align-items: center;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    display: none;
  }
`;
const Name = styled.div`
  /* margin: 0 10px; */
  padding: 0 10px;
  text-align: center;
  font-weight: 600;
`;
const Ava = styled.div`
  height: 35px;
  width: 35px;
  background-color: lightgray;
  border-radius: 200px;
  border: 2px solid #4285f4;
`;

const BarHold = styled.div`
  display: none;
  @media (max-width: 500px) {
    display: block;
  }
`;
