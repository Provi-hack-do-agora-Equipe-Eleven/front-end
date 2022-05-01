import styled from "styled-components";
import background from "../../assets/images/plastic.svg";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${background}) no-repeat;
  background-size: cover;
`;

export const ContainerContent = styled.div`
  width: 1440px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 112px;
`;
