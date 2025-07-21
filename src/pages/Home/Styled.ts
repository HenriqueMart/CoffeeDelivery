import styled from "styled-components";

//Main
export const Main = styled.main`
    font-family: 'baloo 2', sans-serif; 

    article{
        padding: 25px 0;
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
            padding: 10px 0px;
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
    @media(max-width: 1100px) {
        height: auto;
        article{
            flex-direction: column;
            align-items: center;
            flex-wrap: wrap;
        }
        figure{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            
        }img{
                width: 50%;
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
            line-height: 2rem;
        }
        p{
            line-height: 1.5rem;
            margin-bottom: 10px;
        }
    }@media(max-width: 1100px) {
        text-align: center;
        align-items: center;
        justify-content: center;
        line-height: 2rem;

        p{
            margin-bottom: 10px;
        }


    }

`

export const ProductDescription = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    height: 40%;
    gap: 1rem;
    div{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        p{
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 0.75rem;
            color: ${props => props.theme.base_subtitle};
        }
        
    }
    @media(max-width: 768px){
        gap: 1rem;
       
        div{
            flex-direction: row;
            align-items: center;
            gap: 1rem;
            p{
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
            }
        }
    }@media(max-width: 1100px) {
        align-items: center;
        justify-content: center;
        div{
            p{
                
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


//Main
export const SectionCoffee = styled.section`
    height: auto;
    width: 100%;
   background-color: aqua;
    div{ 
            
            h1{
                font-family: 'baloo 2', sans-serif; 
                color: ${props => props.theme.base_title};
                font-size: 1.5rem;    
            }
        
    }
`

export const SectionCoffeeCard =  styled.div`
    width: 100%;
    
  

`

export const CardsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    width: 100%;
    box-sizing: border-box;
`

