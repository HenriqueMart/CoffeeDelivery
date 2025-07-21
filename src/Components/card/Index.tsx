import { ShoppingCart } from "phosphor-react";
import imgCoffee_ExpressoTradicional from '../../assets/cardCoffee/ExpressoTradicional.svg';
import { CardContainer } from "./Style";



export function Card(){
    return(
         
        <CardContainer>
            <div>

            
                <header>
                    <figure>
                        <img src={imgCoffee_ExpressoTradicional} alt="Imagens do Café Expresso Tradicional"/>
                    </figure>
                    <p>TRADICIONAL</p>
                    <h2>
                        Expresso Tradicional
                    </h2>
                    <p>
                        O tradicional Café feito com água quente e grãos moídos
                    </p>
                </header>
                <footer>

                    <div>
                        <p>
                            R$ <span>9,90</span>
                        </p>
                    </div>
                    <div>
                        <p>-</p>
                        <input type="number" name="" id="" />
                        <p>+</p>
                    </div>
                    <div>
                        <ShoppingCart size={32}/>
                    </div>
                                
                </footer>
            </div>
        </CardContainer>


    )
}