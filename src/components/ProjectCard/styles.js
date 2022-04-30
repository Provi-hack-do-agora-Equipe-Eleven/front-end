import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 0.5em 0.5em 0 0;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding: 24px 0;
  color: #434444;

  > h1 {
    font-size: 1.5em;
  }
  > p {
    max-width: 275px;
    line-height: 1.5em;
    font-size: 1em;
    font-weight: 300;
  }
`;

export const Button = styled.button`
  all: unset;
  width: 100%;
  text-align: center;
  padding: 15px 0;
  border-radius: 0 0 0.5em 0.5em;
  cursor: pointer;
  color: #ffffff;
  background: #434444;
  &:hover {
    background: #53d007;
  }
  transition: 800ms;
`;
