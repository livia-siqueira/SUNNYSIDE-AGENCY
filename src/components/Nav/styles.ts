import styled from "styled-components";

export const Nav = styled.nav<{ page: string }>`
  width: ${({ page }) => page === "Footer" ? "30%" : "100%"};
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 400px) {
    background-color: ${({ page }) => page !== "Footer" && "white"};
    flex-direction: ${({ page }) => page !== "Footer" && "column"};
    position: ${({ page }) => page !== "Footer" && "absolute"};
    right: ${({ page }) => page !== "Footer" && "40px"};
    top: ${({ page }) => page !== "Footer" && "90px"};
    width: ${({ page }) => page !== "Footer" && "70%"};
    height: ${({ page }) => page !== "Footer" && "40%"};
  }
`;

export const ButtonNav = styled.button<{ page: string; isActive: boolean }>`
  background: ${({ theme, page, isActive }) =>
    isActive
      ? page === "Header"
        ? theme.colors.white
        : "transparent"
      : "transparent"};
  border: unset;
  padding: 1rem 1.5rem;
  border-radius: 2rem;
  font-family: ${({ theme, isActive, page }) =>
    isActive && page === "Header" ? theme.fonts.fraunces : theme.fonts.barlow};
  text-transform: ${({ isActive, page }) =>
    isActive && page === "Header" && "uppercase"};
  color: ${({ theme, page, isActive }) =>
    page === "Header"
      ? isActive
        ? theme.colors.darkGrayishBlue
        : theme.colors.white
      : theme.colors.darkGrayishBlue};

  &:hover {
    background-color: ${({ page, isActive }) =>
      page === "Header" && isActive && "rgba(255, 255,255, 0.5)"};
    color: white;

    @media screen and (max-width: 400px) {
      background-color: ${({ theme, page }) => page === "Header" && theme.colors.Yellow};
      color: ${({ theme, page }) => page === "Header" && theme.colors.veryDarkDesaturatedBlue};
    }
  }

  @media screen and (max-width: 400px) {
    color: ${({ theme }) => theme.colors.darkGrayishBlue};
    padding: 10px;
  }
`;
