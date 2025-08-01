import styled from "styled-components";

export const MainContainer = styled.main`
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 25px;
    h1{
        font-size: 1rem;
        color: ${props => props.theme.base_title};
        font-weight: bolder;
    }
    article{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: ${props => props.theme.base_title};
        
        div{
            border-radius: 20px;
            background-color: ${props => props.theme.base_card};
            padding: 1rem;
        }
        h2{
            font-family: 'baloo 2', sans-serif;
            font-size: 1.2rem;
            font-weight: 700;
        }
    }
    aside{
      width: 700px;
      display: flex;
      justify-content: end;
    }

`

export const BaseBoxTitle = styled.div`
        display: flex;
        align-items: center;
        span{
            display: flex;
            flex-direction: column;
            align-items: start;
            font-family: 'roboto', sans-serif;
            font-size: 0.875rem;
        }
        div{
            h2{
                font-size: 1rem;
                color: ${props => props.theme.base_text};
                font-weight: 600;
            }
            p{
                font-size: 0.8rem;
                font-weight: 400;
                color: ${props => props.theme.base_text};
            }
        }
        
`
export const AddressBox = styled.div`
    width: 600px;
    span{
        color: ${props => props.theme.yellow_dark};
    }
   
`

/* Formulário */
export const Form = styled.form`
    padding: 0 10px 20px 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    label{
        display: flex;
        gap: 10px;
        input{
            width: 50%;
            height: 30px;
            border: 1px solid ${props => props.theme.base_hover};
            border-radius: 5px;
            background-color: ${props => props.theme.base_input};
            padding: 10px;
        }
        input[id= 'Rua']{
            width: 100%;
        }
        input[id= 'Unidade Federal']{
            width: 8%;
        }
        input[id= 'Bairro']{
            width: 60%;
        }
        ::placeholder{
            font-size: 0.7rem;
            font-weight: 400;
            font-family: 'roboto', sans-serif;
        }
        
    }
`

export const PaymentType = styled.div`
    background-color: blue;
    width: 100%;
     span{
        color: ${props => props.theme.purple_dark};
    }

`

export const CardPay = styled.div`
    display: flex;
    gap: 10px;
    animation: 0.5s;

    Button{
        background-color: ${props => props.theme.base_input};
        border-radius: 10px;
        border: 1px solid ${props => props.theme.base_hover};
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        height: 50px;
        width: 33%;
        
        p{
            color: ${props => props.theme.base_subtitle};
            text-transform: uppercase;
            font-size: 0.7rem;
            font-weight: 400;
            
        }
        
    }
    :hover{
                background-color: ${props => props.theme.base_hover};
    }

`

//Aside - Barra de compra

export const AsideCofferAll = styled.article`
    width: 100%;
    div{
        
    }

`