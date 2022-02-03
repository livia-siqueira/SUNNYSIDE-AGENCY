import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  width: 25%;

  @media screen and (max-width: 400px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const Image = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.barlow};
  font-weight: normal;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkGrayishBlue};
`;

export const Name = styled.p`
  font-family: ${({ theme }) => theme.fonts.fraunces};
  color: ${({ theme }) => theme.colors.veryDarkDesaturatedBlue};
  font-weight: 900;
`;

export const Profession = styled.p`
  color: ${({ theme }) => theme.colors.grayishBlue};
  font-family: ${({ theme }) => theme.fonts.barlow};
`;

export const Datas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
