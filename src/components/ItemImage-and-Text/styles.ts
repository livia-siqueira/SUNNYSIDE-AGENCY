import styled from "styled-components";

export const Container = styled.div<{ image: string }>`
  height: 500px;
  width: 50%;
  padding: 10rem 10rem 2rem 10rem;
  background: ${(props) => `url(${props.image}) no-repeat`};
  @media screen and (max-width: 400px) {
    width: 100%;
    align-items: center;
    padding: 2rem;
    background-position: center;
  }
`;

export const Title = styled.h1<{ title: string }>`
  color: ${({ theme, title }) =>
    title === "Graphic Design"
      ? theme.colors.darkDesaturated
      : theme.colors.veryDarkDesaturatedBlue};
  font-family: ${({ theme }) => theme.fonts.fraunces};
`;

export const Text = styled.p<{ title: string }>`
  font-family: ${({ theme }) => theme.fonts.barlow};
  text-align: center;
  color: ${({ theme, title }) =>
    title === "Graphic Design"
      ? theme.colors.darkDesaturated
      : theme.colors.veryDarkDesaturatedBlue};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`;
