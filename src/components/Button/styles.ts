import styled from "styled-components";

export const Button = styled.input`
  width: 320px;
  height: 38px;
  background: #0062ff;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  :focus {
    outline: none;
  }
  :disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
