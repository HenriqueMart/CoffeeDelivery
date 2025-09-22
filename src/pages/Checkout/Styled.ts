import styled from "styled-components";

export const MainContainer = styled.main`
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 25px;
    h1{
        border-radius: 0;
        font-size: 1rem;
        color: ${props => props.theme.base_title};
        font-weight: bolder;
    }
    article{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: ${props => props.theme.base_title};

        h2{
            font-family: 'baloo 2', sans-serif;
            font-size: 1.2rem;
            font-weight: 700;
        }
    }
    aside{
        width: 100%;
        max-width: 400px;

        article{
            width: 100%;  
        }
    }

    @media(max-width: 900px){
        flex-direction: column-reverse;
        aside{
            max-width: 100%;
        }
    }
    
`

export const BaseLabel = styled.div`
            display: flex;
            flex-direction: column;
            gap: 25px;
            border-radius: 20px;
            background-color: ${props => props.theme.base_card};
            padding: 1rem;
            
`

export const BaseBoxTitle = styled.div`
        display: flex;
        gap: 10px;
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
export const AddressBox = styled(BaseLabel)`
    width: 100%;
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
     
        input[id= 'Unidade Federal']{
            max-width: 50px;
        }
       
        ::placeholder{
            font-size: 0.7rem;
            font-weight: 400;
            font-family: 'roboto', sans-serif;
        }
        
    }
`

export const PaymentType = styled(BaseLabel)`
    
     span{
        color: ${props => props.theme.purple_dark};
    }

`

export const CardPay = styled.div`
    display: flex;
    gap: 10px;
    animation: 0.5s;
    label{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme.base_input};
        border-radius: 10px;
        border: 1px solid ${props => props.theme.base_hover};
        align-items: center;
        justify-content: center;
        gap: 10px;
        height: 50px;
        width: 33%;
        input{
            appearance: none;
        }
        
        p{
            
            color: ${props => props.theme.base_subtitle};
            text-transform: uppercase;
            font-size: 0.7rem;
            font-weight: 400;
        }
    }
    :hover{
                background-color: ${(props) => props.theme.purple_light};
    }

    label:has(input:checked) {
        background-color: ${(props) => props.theme.purple_light};
        border: 1px solid ${(props) => props.theme.purple};
    }

    @media(max-width: 1100px){
        display: flex;
        flex-direction: column;
        
        label{
            width: 100%;
        }
    
    }

`

//Aside - Barra de compra

export const AsideCofferAll = styled(BaseLabel)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 25px;
`

export const AllSelectPrice = styled.div`
   
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 10px;
   div{
    display: flex;
    justify-content: space-between;

    p{
        font-family: 'roboto', sans-serif;
        font-size: 1rem;
    }
    span{
            margin-right: 5px;
        }
    }
    :last-child{

            
            button{
                background-color: ${props => props.theme.yellow};
                width: 100%;
                font-weight: 500;
                padding: 10px;
                border-radius: 10px;
                border: 0 solid black;
                cursor: pointer;
                transition: 0.6s;
                color: ${props => props.theme.while};
                text-transform: uppercase;
                font-size: 1rem;
            }
            :hover{
                background-color: ${props => props.theme.yellow_dark};
            }
        }

`

export const MessagemError = styled.div`
    display: flex;
    flex-direction: column;
    span{
        font-size: 0.75rem;
        color: red;
        opacity: 75%;
    }

` 



