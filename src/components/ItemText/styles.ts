import styled from "styled-components";

export const Container = styled.div`
  height: 500px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding: 10rem;
  background-color: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: 400px) {
    width: 100%;
    height: 400px;
    align-items: center;
    padding: 0.5rem;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.veryDarkDesaturatedBlue};
  font-family: ${({ theme }) => theme.fonts.fraunces};

  @media screen and (max-width: 400px) {
    text-align: center;
  }
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.barlow};
  color: ${({ theme }) => theme.colors.darkGrayishBlue};
  font-weight: 0;
`;

export const LearnMore = styled.button<{ typeText: string }>`
  width: 7rem;
  background-color: transparent;
  border: unset;
  text-align: center;
  font-variant: small-caps;
  font-family: ${({ theme }) => theme.fonts.fraunces};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.veryDarkDesaturatedBlue};
  position: relative;
  font-weight: 900;
  z-index: 1;
  &:after {
    content: "";
    display: block;
    width: inherit;
    border-radius: 6px;
    position: absolute;
    bottom: 1px;
    z-index: -1;
    border-bottom: 6px solid
      ${({ theme, typeText }) =>
        typeText === "Transform your brand"
          ? theme.colors.Yellow
          : theme.colors.softRed};
    opacity: 0.4;
  }
  &:hover {
    &:after {
      opacity: 1;
    }
  }
`;
