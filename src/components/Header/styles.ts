import styled from "styled-components";

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
  font-family: ${({ theme }) => theme.fonts.fraunces};
`;

export const Defination = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20%;
  justify-content: center;
  align-items: center;
  height: 50%;

  @media screen and (max-width: 400px) {
    gap: 25px;
  }
`;

export const Menu = styled.div`
  &:after {
    @media screen and (max-width: 400px) {
      content: "";
      display: block;
      width: 0px;
      height: 0px;
      position: absolute;
      top: 60px;
      right: 35.5px;
      border-top: 30px solid transparent;
      border-bottom: 30px solid transparent;
      border-left: 30px solid #fff;
      transform: rotate(45deg);
    }
  }
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
  font-family: ${({ theme }) => theme.fonts.fraunces};
  text-align: center;
  @media screen and (max-width: 400px) {
    line-height: 1;
  }
`;

export const Icon = styled.button`
  display: none;

  @media screen and (max-width: 400px) {
    display: block;
    color: white;
    width: 36px;
    height: 36px;
    background-color: transparent;
    border: unset;
  }
`;

export const Nav = styled.div`
  width: 30%;
  @media screen and (max-width: 400px) {
    display: none;
  }
`;
