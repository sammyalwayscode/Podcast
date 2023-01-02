import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <TextDiv>
          <h1>
            The sound <br />
            of a new
            <br /> Generation
          </h1>
          <strong>Voices are ment to be experienced...</strong>
          <p>
            We bring to you one of the Greatest means to share feelings, thought
            and Ideals and also know what other people feels about your Ideal
            And Thoughts all at No Cost
          </p>
          <ButtonHold>
            <NavLink to="/signup">
              <button>Sign Up</button>
            </NavLink>
            <NavLink to="/signin">
              <button
                style={{
                  backgroundColor: "transparent",
                  textDecoration: "line-through",
                }}
              >
                Explore Intrest
              </button>
            </NavLink>
          </ButtonHold>
        </TextDiv>

        <ImageDiv>
          <img src="/image/her.png" alt="" />
        </ImageDiv>
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;
  @media (max-width: 800px) {
    margin-bottom: 30px;
  }
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    justify-content: center;
    flex-direction: column-reverse;
    text-align: center;
  }

  @media (max-width: 500px) {
    width: 90%;
  }
`;
const TextDiv = styled.div`
  width: 400px;
  h1 {
    font-size: 70px;
    line-height: 1;
    font-weight: 800;
  }

  strong {
    font-size: 15px;
  }

  p {
    font-size: 13px;
  }

  @media (max-width: 500px) {
    width: 100%;
    h1 {
      font-size: 40px;
    }
    strong {
      font-size: 13px;
    }

    p {
      font-size: 12px;
    }
  }
`;
const ButtonHold = styled.div`
  button {
    height: 35px;
    width: 150px;
    background-color: #48a9c9;
    color: #fff;
    font-family: Montserrat;
    font-size: 13px;
    font-weight: bold;
    border-radius: 5px;
    margin-right: 10px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 350ms;
    :hover {
      transform: scale(0.94);
    }
  }
`;
const ImageDiv = styled.div`
  img {
    width: 100%;
  }
`;
