import React from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Title>Welcome Back, User</Title>
          <Sub>Welcome Back, Please Enter Your Details</Sub>
          <button>
            {" "}
            <FcGoogle
              fontSize="23px"
              style={{
                marginRight: "10px",
              }}
            />{" "}
            Log in with Google
          </button>
        </Top>

        <Break>
          <hr />
          or
          <hr />
        </Break>
        <Buttom>
          <InputHold>
            <small>Email</small>
            <input placeholder="Enter Your Email" type="email" />
          </InputHold>
          <InputHold>
            <small>Password</small>
            <input placeholder="Your Password Here" type="password" />
          </InputHold>
          <button>Sign In</button>
          <label>
            Don't Have An Account?{" "}
            <NavLink
              to="/signup"
              style={{
                textDecoration: "none",
              }}
            >
              <b>Sign Up Now</b>{" "}
            </NavLink>{" "}
          </label>
        </Buttom>
      </Wrapper>
    </Container>
  );
};

export default SignIn;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Top = styled.div`
  text-align: center;
  button {
    font-family: poppins;
    width: 270px;
    height: 35px;
    border: none;
    outline: none;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 350ms;
    border-radius: 4px;
    :hover {
      transform: scale(0.97);
    }
  }
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: 900;
`;
const Sub = styled.div`
  font-size: 12px;
  margin-bottom: 30px;
`;
const Break = styled.div`
  display: flex;
  width: 300px;
  margin: 30px 0;
  hr {
    height: 0.5px;
    width: 100px;
    border: none;
    background-color: gray;
  }
`;
const Buttom = styled.div`
  display: flex;
  flex-direction: column;
  button {
    font-family: poppins;
    width: 270px;
    height: 35px;
    border: none;
    outline: none;
    font-size: 13px;
    font-weight: 600;
    margin: 10px 0;
    color: #fff;
    background-color: #1a73e8;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 350ms;
    border-radius: 4px;
    :hover {
      transform: scale(0.97);
    }
  }
  label {
    font-size: 10px;
    text-align: center;
    b {
      color: red;
    }
  }
`;
const InputHold = styled.div`
  display: flex;
  flex-direction: column;
  input {
    width: 270px;
    height: 35px;
    transition: all 350ms;
    margin-bottom: 10px;
    font-family: poppins;
    border-radius: 2px;
    border: none;
    :focus-visible {
      outline: 2px solid #1a73e8;
    }
  }
  small {
    font-size: 10px;
  }
`;
