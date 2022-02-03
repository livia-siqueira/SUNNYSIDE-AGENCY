import styled from "styled-components";




export const Container = styled.div<{image: string}>`
    width: 50%;
    height: 500px;
    background: ${(props) => `url(${props.image}) no-repeat`};
`