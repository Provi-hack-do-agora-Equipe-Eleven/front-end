import styled from "styled-components";
import background from "../../assets/images/projects-main-background.png"

export const Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  background: url(${background}) no-repeat;
  background-size: cover;
  position: relative;
`;

export const Title = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > h1 {
    color: #434444;
    font-weight: 400;
    font-size: 100px;
  }
  padding-bottom: 3em;
`;

export const Button = styled.button`
  all: unset;
  padding: 16px 70px;
  cursor: pointer;
  border-radius: 0.5em;
  color: #434444;
  background: #fff;
  &:hover {
    color: #fff;
    background: #434444;
  }
  transition: 500ms;
`;
export const Projects = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
