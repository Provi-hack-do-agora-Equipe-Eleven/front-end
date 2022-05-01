import styled from "styled-components";
import background from "../../assets/images/bg-projects-page.png";

export const Container = styled.article`
  height: 550px;
  width: 100%;
  padding: 0 9em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(${background}) no-repeat;
  background-size: cover;

  > h1 {
    font-weight: 400;
    font-size: 80px;
    color: #fff;
  }
`;

