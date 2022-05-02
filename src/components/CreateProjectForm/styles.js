import styled, { css } from "styled-components";

const inputs = css`
  all: unset;
  width: 100%;
  border-radius: 0.5em;
  padding: 1em;
  border: 2px solid #000000;
  box-sizing: border-box;
`;

export const Container = styled.div``;

export const Form = styled.form`
  width: 800px;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  box-sizing: border-box;
  padding: 2em 0;
  > hr {
    all: unset;
    border: 2px solid #000000;
  }
`;

export const Button = styled.button`
  all: unset;
  width: 100%;
  text-align: center;
  padding: 15px 0;
  border-radius: 0.5em;
  cursor: pointer;
  color: #ffffff;
  background: #434444;
  &:hover {
    background: #53d007;
  }
  transition: 500ms;
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding-bottom: 2em;
  > h1 {
    font-size: 32px;
    font-weight: 400;
  }
  > input {
    ${inputs}
  }
  > select {
    ${inputs}
  }
  > textarea {
    ${inputs}
    height: 150px;
  }
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.5em;
  > input {
    ${inputs}
  }
  > select {
    ${inputs}
  }
`;
