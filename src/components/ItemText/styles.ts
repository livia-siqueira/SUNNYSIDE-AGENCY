import styled from "styled-components";



export const Container = styled.div`
    width: 50%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    padding: 10rem;
    background-color: ${({theme}) => theme.colors.white};
`

export const Title = styled.h1`
    color: ${({theme}) => theme.colors.veryDarkDesaturatedBlue};
    font-family: ${({theme}) => theme.fonts.fraunces};
`

export const Text = styled.p`
    font-family: ${({theme}) => theme.fonts.barlow};
    font-weight: 0;
`

export const LearnMore = styled.button`
    width: 5rem;
    background-color: transparent;
    border: unset;
    border-bottom: 3px solid ${({theme}) => theme.colors.Yellow};
    font-variant: small-caps;
    font-family: ${({theme}) => theme.fonts.fraunces};
    font-size: 1rem;
    color: ${({theme}) => theme.colors.veryDarkDesaturatedBlue};
`