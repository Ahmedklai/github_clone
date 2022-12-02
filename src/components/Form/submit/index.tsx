import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ButtonComponent } from "../../Button/index";
const Wrapper = styled.div`
  display: flex;
  position: relative;
  padding-top: 50px;
`;
const InputLabel = styled.label`
  position: absolute;
  top: 0;
  padding: 0 0 1px 20px;
  transition: all 200ms;
  opacity: 0.5;
  color: #92929d;
`;
const InputText = styled.input`
  z-index: 1;
  width: 320px;
  height: 38px;
  border: 1px solid #f1f1f5;
  box-sizing: border-box;
  border-radius: 15px;
  background: #fafafb;
  padding: 20px 20px 20px 20px;
  margin-bottom: 15px;
  font-size: 12px;
  color: #92929d;
  :focus {
    outline: none;
    ::placeholder {
      opacity: 0;
    }
  }
  :focus + ${InputLabel} {
    font-size: 75%;
    transform: translate3d(0, -100%, 0);
    opacity: 1;
    color: #fc5a5a;
  }
`;

// import { Container } from './styles';

const LoginFormSubmit: React.FC = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setToken(value);
  };
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    sessionStorage.setItem("token", token);
    console.log(token);
    // 👇️ redirect to /contacts
    navigate("/profile");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Wrapper>
        <InputText
          type="text"
          placeholder="Your Token"
          name="token"
          onChange={handleChange}
          value={token}
        />
        {/* <InputLabel>{error.login ? 'Error, your login: admin' : ''}</InputLabel> */}
      </Wrapper>
      <Wrapper>
        <InputLabel>
          {/* {error.password ? 'Error, your password: admin' : ''} */}
        </InputLabel>
      </Wrapper>
      <ButtonComponent disabled={false} value="Sign in" />
      {/* {renderRedirect()} */}
    </form>
  );
};

export default LoginFormSubmit;
