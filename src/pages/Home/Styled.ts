import styled from "styled-components";

export const Main = styled.main`
    background-color: ${props => props.theme.background};
    height: 544px;
    font-family: 'baloo 2', sans-serif; 

    article{
        margin: 50px 100px;
        padding: 25px;
        display: flex; 
        gap: 2rem;
        
    }
    figure{
        img{
            height: auto;
        }
    }
    @media(max-width: 768px) {
        article{
            margin: 20px;
            padding: 10px;
            flex-direction: column;
            align-items: center;
            flex-wrap: wrap;
        }
        figure{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                width: 70%;
            }
        }
        
    }
`

export const Description = styled.div`  
    display: flex;
    flex-direction: column;
    
    gap: 25px;
    height: 50%;
    h1{
        width: 90%;
        color: ${props => props.theme.base_title};
        font-size: 2.5rem;
        line-height: 3rem;
        font-weight: bolder;
    }
    p{
        width: 90%;
        margin-bottom: 100px;
        font-size: 1rem;
        font-weight: 400;
        color: ${props => props.theme.base_subtitle};
    }
    @media(max-width: 768px){
        text-align: center;
        align-items: center;
        justify-content: center;
        h1{
            font-size:1.5rem;
            line-height: 1.5rem;
        }
        p{
            font-size: 0.875rem;
            margin-bottom: 10px;
        }
    }

`

export const ProductDescription = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    height: 40%;
    gap: 2rem;
    div{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        p{
            font-size: 0.875rem;
            color: ${props => props.theme.base_subtitle};
        }
        
    }
    @media(max-width: 768px){
        margin-top: 25px;
        gap: 1rem;
        height: 100px;
        div{
            flex-direction: row;
            gap: 1rem;
            width: 100%;
            p{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                height: 100%;
            }
        }
    }
`

interface IconeProps {
    statusColor: 'yellow_dark'| 'yellow' | 'purple' | 'base_title';
}

export const IconeDescrition = styled.span<IconeProps>`
    display: inline-block;/*Centralizando os ícones*/
    height: 40%;
    line-height: 40%;

    border-radius: 50%;
    padding: 5px;

    background-color: ${props => props.theme[props.statusColor]};

    @media(max-width: 768px){
        display: flex;
        align-items: center;
        justify-content: center;
    
    }
`


