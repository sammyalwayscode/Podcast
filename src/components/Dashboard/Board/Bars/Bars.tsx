import React from "react";
import styled from "styled-components";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";

const Bars = () => {
  return (
    <Container>
      <SideBar />
      <Header />
    </Container>
  );
};

export default Bars;

const Container = styled.div`
  height: 100vh;
  display: flex;
`;
