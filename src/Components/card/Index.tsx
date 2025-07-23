import { Minus, Plus, ShoppingCart } from "phosphor-react";
import imgCoffee_ExpressoTradicional from '../../assets/cardCoffee/ExpressoTradicional.svg';
import { AddCard, BuyUnidade, CardContainer, CoffeeDescription, Footer, Header, Preco, TagDescrition } from "./Style";



export function Card(){
    return(
         
        <CardContainer>
            <div>
                <Header>
                    <figure>
                        <img src={imgCoffee_ExpressoTradicional} alt="Imagens do Café Expresso Tradicional"/>
                    </figure>
                        <TagDescrition>
                            <p>TRADICIONAL</p>
                        </TagDescrition>
                    <CoffeeDescription>
                        <h2>
                            Expresso Tradicional
                        </h2>
                        <p>
                            O tradicional Café feito com água quente e grãos moídos
                        </p>
                    </CoffeeDescription>
                </Header>
                <Footer>
                    <Preco>
                        <p>
                            R$<span>9,90</span>
                        </p>
                    </Preco>
                    <div>
                        <BuyUnidade>
                            <Minus size={12} />
                            <p>
                                1
                            </p>
                            <Plus size={12} />
                        </BuyUnidade>
                        <AddCard>
                            <ShoppingCart size={20} weight="fill"/>
                        </AddCard>
                    </div>
                    
                        
                        
                 

                        
   
                                
                </Footer>
            </div>
        </CardContainer>


    )
}