import styled from "styled-components";

interface propsButton {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  height: 75vh;
  background-image: url("/desktop/image-header.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 2rem;
  justify-content: space-between;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.fraunces};
`;

export const Nav = styled.nav`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ButtonNav = styled.button`
  background: transparent;
  border: unset;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.barlow};
`;

export const Defination = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20%;
  justify-content: center;
  align-items: center;
  height: 50%;
`;

export const IconArrow = styled.span`
    background-image: url("/desktop/icon-arrow-down.svg");
    background-repeat: no-repeat;
    width: 36px;
    height: 100%;
`;

export const TextDefine = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-variant: small-caps;
  letter-spacing: 5px;
  font-size: 3rem;
  font-family: ${({theme}) => theme.fonts.fraunces};
`;
