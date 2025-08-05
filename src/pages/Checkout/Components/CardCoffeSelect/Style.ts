import styled from "styled-components";


export const CardSelect = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 25px 0;
    border-bottom: 1px solid ${props => props.theme.base_hover};
    
    img{
        width: 60px;
    }
`

export const InformationCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const NamePrice = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        font-size: 0.9rem;
        font-family: 'roboto', sans-serif;
        font-weight: 500;
    }
    h3{
        font-weight: bolder;
        span{
            margin-left: 5px;
        }
    }
`

export const ActionCardSelection = styled.div`
    display: flex;
    gap: 10px;
    
    
    div{
        background-color: ${props => props.theme.base_button};
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        gap: 5px;
        border-radius: 10px;
        color: ${props => props.theme.purple_dark};
        p{
            font-family: 'roboto', sans-serif;
            font-size: 0.875rem;
            text-transform: uppercase;
            color: ${props => props.theme.base_text};
        }
    }

`