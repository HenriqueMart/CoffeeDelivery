import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { AddCard, BuyUnidade, CardContainer, CoffeeDescription, Footer, Header, Preco, TagDescrition } from "./Style";
import { useEffect, useState } from "react";

type Content = {
    photo: string
    title: string;
    tag: string[];
    subtitle: string;
    valor: number;
}

type CardProps = {
    content: Content;
}

export function Card({content}: CardProps){
    const [unidade, setUnidade] = useState(1);

  
    
    return(
         
        <CardContainer>
            <div>
                <Header>
                    <figure>
                        <img src={content.photo} alt="Imagens do Café Expresso Tradicional"/>
                    </figure>
                        <TagDescrition>
                            <p>{content.tag}</p>
                        </TagDescrition>
                    <CoffeeDescription>
                        <h2>
                            {content.title}
                        </h2>
                        <p>
                            {content.subtitle}
                        </p>
                    </CoffeeDescription>
                </Header>
                <Footer>
                    <Preco>
                        <p>
                            R$<span>{content.valor}</span>
                        </p>
                    </Preco>
                    <div>
                        <BuyUnidade>
                            <Minus size={12}/>
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