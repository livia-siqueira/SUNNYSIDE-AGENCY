import styled from "styled-components";

export const Container = styled.div<{ image: string }>`
  height: 500px;
  width: 50%;
  background: ${(props) => `url(${props.image}) no-repeat`};

  @media screen and (max-width: 400px) {
    width: 100%;
    height: 300px;
    background-position: center;
    background-size: 100%;
  }
`;
