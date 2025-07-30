import styled from "styled-components";

export const MainContainer = styled.main`
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    
    article{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 60%;
        div{
            border-radius: 20px;
            background-color: ${props => props.theme.base_card};
            padding: 1rem;
        }
        h1{
            font-family: 'baloo 2', sans-serif;
            font-size: 1.2rem;
            font-weight: 700;
        }
    }
    aside{
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: end;
        article{
            width: 100%;
        }
    }

`

export const AddressBox = styled.div`
    div{
       display: flex;
       align-items: center;
       span{
        color: ${props => props.theme.yellow_dark};
       }
        div{
            display: flex;
            flex-direction: column;
            align-items: start;
            font-family: 'roboto', sans-serif;
            font-size: 0.875rem;
            h1{
                font-weight: 600;
                color: ${props => props.theme.base_title};
            }
            p{
                font-weight: 400;
                color: ${props => props.theme.base_text};
            }
        }
    }

    
    
`