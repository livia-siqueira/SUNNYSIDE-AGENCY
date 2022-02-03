import styled from "styled-components";

export const Container = styled.div``;

export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

    @media screen and (max-width: 400px) {
        flex-direction: column;
    }
`;

export const TitleClient = styled.h1`
  font-variant: small-caps;
  color: ${({ theme }) => theme.colors.darkGrayishBlue};
  margin-top: 8rem;
`;

export const Perfis = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 400px){
    flex-direction: column;
    gap: 50px;
  }
`;

export const Images = styled.div`
  display: flex;
  width: 100%;
  margin-top: 8rem;

  @media screen and (max-width: 400px) {
      flex-wrap: wrap;
  }
`;

export const Image = styled.img`
    height: 400px;
    width: 30%; 

    @media screen and (max-width: 400px) {
      width: 50%;
      height: 180px;
  }
`;

export const ImagesAlterResponsive = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width:400px){
        flex-direction: column-reverse;
    }
`
