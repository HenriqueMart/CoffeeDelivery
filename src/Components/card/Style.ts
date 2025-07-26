import styled from "styled-components";


export const CardContainer = styled.section`
    background-color: ${props => props.theme.base_card};
    padding: 0 1rem;
    border-radius: 0 25px 0 25px;
`

export const Header = styled.header`   
    figure{
        margin-top: -10%;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 50%;
        }
    }
`

export const CoffeeDescription = styled.div`

    h2{
            text-align: center;
            font-size: 1.2rem;
            font-family: 'Baloo 2', sans-serif;
            color: ${props => props.theme.base_title};
            margin-bottom: 5px;
    }
    p{
            font-family: 'Roboto', sans-serif;
            font-weight: 350;
            font-size: 0.8rem;
            text-align: center;
            color: ${props => props.theme.base_text};
            margin-bottom: 20px;
    }

`


export const TagDescrition = styled.div`
        width: 100%; 
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5px;
        margin: 0.875rem 0;
        p{
            max-width: fit-content; //Ajustando dependendo do tamanho do texto
            padding: 2px 10px;
            border-radius: 20px;
            font-family: 'Baloo 2', sans-serif;
            background-color: ${props => props.theme.yellow_light};
            color:  ${props => props.theme.yellow_dark};
            font-size: 0.7rem;
            font-weight: bolder;
            white-space: nowrap;
        }

`
//Footer
export const Footer = styled.footer`
    margin:  10px 0;
    display: flex;
    gap: 10px;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    div{
        display: flex;
        flex-direction: row;
        display: flex;
        align-items: center;
        border-radius: 5px;
        gap: 10px;
    }
`

export const Preco = styled.div`
    p{
        font-family: 'baloo 2', sans-serif;
        font-size: 0.875rem;
        color: ${ props => props.theme.base_text};
        span{
            font-family: 'roboto', sans-serif;
            margin-left: 2px;
            font-weight: bolder;
            font-size: 1.3rem;
            color: ${ props => props.theme.base_subtitle};
        }
    }

`


export const BuyUnidade = styled.div`
    padding: 5px 10px;
    background-color: ${props => props.theme.base_button};

    
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 300;
    color: ${props => props.theme.purple};
    p{
        color: ${props => props.theme.base_title};
        font-weight: bold;
        font-size: 0.875rem;
    }
    :hover{
            color: ${props => props.theme.purple_dark};
     }
    
`

export const AddCard = styled.div`
    cursor: pointer;
    padding: 5px;
    background-color: ${props => props.theme.purple_dark};
    color: ${props => props.theme.while};

`