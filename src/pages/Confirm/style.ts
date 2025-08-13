import styled from "styled-components";


export const MainContainer = styled.main`
    display: flex;
    width: 100%;
    justify-content: space-between;
    article{
        display: flex;
        width: 50%;
        gap: 50px;
        margin: 50px 20px;
        flex-direction: column;
    }
    aside{
        display: flex;
        margin: 50px 0;
        align-items: end;
        justify-content: center;
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

export const InformatioAddress = styled.main`
    padding: 30px;
    border: 1px solid ${props => props.theme.purple};
    border-radius: 0 25px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    div{
        display: flex;
        
        div{
            display: flex;
            flex-direction: column;
            p{
                font-size: 1rem;
                color: ${props => props.theme.base_title};
                font-weight: 400;
            }
            span{
                
                font-weight: bold;
            }
        }
        
    }


`

export const Ico = styled.div`
    padding: 0 10px ;
    margin-right: 10px;
    border: 1px solid black;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.base_title};
    color: white;
`