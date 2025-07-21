import styled from "styled-components";


export const CardContainer = styled.section`
    background-color: ${props => props.theme.base_card};
    display: flex;
    
    

    margin: 10px 0;
    
    width: 220px;
    height: 300px;
    div{
        display: flex;
        flex-direction: column;
        height: 50%;
    }
    

`