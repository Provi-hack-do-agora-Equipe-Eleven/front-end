import styled from "styled-components";
import background from "../../assets/images/bg-plastico-bolha.png";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 110px;
  background: url(${background}) no-repeat;
  background-size: cover;
`;
