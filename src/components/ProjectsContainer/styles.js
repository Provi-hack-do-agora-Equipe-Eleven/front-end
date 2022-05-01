import styled, { css } from "styled-components";

export const Container = styled.div`
  margin-bottom: 2em;
`;
const inputs = css`
  all: unset;
  width: 400px;
  text-align: center;
  padding: 0.5em;
  color: #434444;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.5em;
  margin-top: -2em;
`;

export const Input = styled.input`
  ${inputs}
`;

export const Select = styled.select`
  ${inputs}
  cursor: pointer;
`;
export const Button = styled.button`
  padding: 16px 48px;
  border-radius: 4px;
  background: #474d51;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    background: #53d007;
  }
  transition: 500ms;
`;

export const Projects = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2em;
  padding: 5em 0;
`;

export const Toggler = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
