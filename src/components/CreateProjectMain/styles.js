import styled from "styled-components";
import background from "../../assets/images/bg-createprojects.png";

export const Container = styled.article`
  height: 500px;
  width: 100%;
  padding: 0 9em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(${background}) no-repeat;
  background-size: cover;
`;

export const Div = styled.div`
  width: 1280px;
  margin: 0 auto;
  > h1 {
    max-width: 500px;
    font-weight: 400;
    font-size: 80px;
    color: #474d51;
  }
`;
