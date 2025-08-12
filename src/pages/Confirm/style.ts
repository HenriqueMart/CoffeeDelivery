import styled from "styled-components";


export const MainContainer = styled.main`
    display: flex;
    width: 100%;
    height: 80vh;
    justify-content: space-between;
    background-color: aqua;
    article{
        display: flex;
        width: 50%;
        gap: 50px;
        background-color: azure;
        margin: 50px 20px;
        flex-direction: column;
    }

`

export const TitleConfirm = styled.div`
    h1{
        font-size: 2rem;
        color: ${props => props.theme.yellow_dark};
    }
    p{
        font-size: 1rem;
        color: ${props => props.theme.base_subtitle};
        width: 400;
        
    }
`