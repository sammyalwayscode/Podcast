import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Bars from "../Bars/Bars";
import Categories from "../Comp/Categories";
import Favourites from "../Comp/Favourites";
import Home from "../Comp/Home";
import Library from "../Comp/Library";
import Search from "../Comp/Search";

const Router = () => {
  return (
    <Container>
      <Bars />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/library" element={<Library />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Container>
  );
};

export default Router;

const Container = styled.div`
  display: flex;
`;
