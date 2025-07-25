import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import banner_coffee from '../../assets/home/Imagem.svg';
import { CardsWrapper, Description, IconeDescrition, Main, ProductDescription, SectionCoffee } from './Styled';
import { Card } from '../../Components/card/Index';
import { useContext } from 'react';
import { CoffesContext } from '../../context/CoffeesContext';

export function Home(){
    const dados = useContext(CoffesContext);

    if (!dados) return <p>Carregando...</p>
    
    

    return(
    <>
        <Main>
            <article>
                <div>
                    <Description>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </Description>
                    <ProductDescription>
                    <div>
                        <p><IconeDescrition statusColor="yellow_dark"><ShoppingCart size={16} weight='fill' color='white' /></IconeDescrition> Compra simples e segura</p>
                        <p><IconeDescrition statusColor="yellow"><Timer size={16} weight='fill' color='white'/></IconeDescrition> Entrega rápido e rastreada</p>
                    </div>
                    <div>
                        <p><IconeDescrition statusColor="base_title"><Package size={16} weight='fill' color='white'/></IconeDescrition> Embalagem mantém o café intacto</p>
                        <p><IconeDescrition statusColor="purple"><Coffee size={16} weight='fill' color='white'/></IconeDescrition> O café chega fresquinho até você</p>
                    </div>
                    </ProductDescription>
                </div>
                <figure>
                    <img src={banner_coffee}/>
                </figure>
            </article>
        </Main>
        <SectionCoffee>
            
            <div>
                <h1>Nossos Cafés</h1>
            </div>
            <CardsWrapper>
                
                {dados.map((coffes) => {
                    return(
                        <Card key={coffes.id} content={coffes.content}/>
                    )
                })} 

            </CardsWrapper>
            
        </SectionCoffee>
    </>
    )
}