import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { AddCard, BuyUnidade, CardContainer, CoffeeDescription, Footer, Header, Preco, TagDescrition } from "./Style";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CoffeesContext";

type Content = {
    photo: string;
    title: string;
    tag: string[];
    subtitle: string;
    valor: number;
}

type CardProps = {
    id: number;
    content: Content;
}

export function Card({id, content}: CardProps){
    const[quantity, setQuantity] = useState(1);

    const {addToCart} = useContext(CartContext);

    function handleMoreUnity(){
        setQuantity(prevQuantity => prevQuantity + 1);
        
    }

    const handleAddToCart = () => {
        addToCart(id, quantity);
        //console.log("Produto adicionado ao carrinho:", {id, quantity})
    }
    
    function handleLessUnity(){
        setQuantity(prevQuantity => {
            if(prevQuantity > 1){
                return prevQuantity -1;
            }
            return 1;
        });
        
    }

    return(
         
        <CardContainer>
            <div>
                <Header>
                    <figure>
                        <img src={content.photo} alt="Imagens do Café Expresso Tradicional"/>
                    </figure>
                    <TagDescrition> 
                            {content.tag.map((tag) => {
                                return <p>{tag}</p>
                            })}
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
                                R$<span>{content.valor.toFixed(2)}</span>
                        </p>
                    </Preco>
                    <div>
                        <BuyUnidade>
                            <Minus onClick={handleLessUnity} size={12}/>
                            <p>
                                {quantity}
                            </p>
                            <Plus onClick={handleMoreUnity} size={12} />
                        </BuyUnidade>
                        <AddCard>
                            <ShoppingCart onClick={handleAddToCart}  size={20} weight="fill"/>
                        </AddCard>
                    </div>      
                </Footer>
            </div>
        </CardContainer>


    )
}