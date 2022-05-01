import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  color: #fff;
`;

export const Title = styled.section`
  > p {
    font-size: 24px;
  }
  > h1 {
    font-size: 72px;
    font-weight: 400;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export const Input = styled.input`
  all: unset;
  width: 100%;
  padding: 16px 40px;
  border: 3px solid #fff;
  border-radius: 0.5em;
`;

export const Button = styled.button`
  all: unset;
  width: 100%;
  text-align: center;
  padding: 16px 0;
  border-radius: 0.5em;
  cursor: pointer;
  color: #ffffff;
  background: #434444;
  &:hover {
    background: #53d007;
  }
  transition: 500ms;
`;
