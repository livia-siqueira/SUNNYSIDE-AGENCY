import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 50vh;
  background-color: hsla(168, 34%, 41%, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const Title = styled.h2`
   color: ${({ theme }) => theme.colors.darkModerate}; 
   font-weight: 900;
   font-family: ${({ theme }) => theme.fonts.fraunces};
`

export const Icons = styled.div`
    display: flex;
    width: 200px;
    justify-content: space-evenly;
    align-items: center;
`

export const Icon = styled.img``