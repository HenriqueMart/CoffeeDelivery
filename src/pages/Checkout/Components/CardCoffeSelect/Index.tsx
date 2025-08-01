import { Minus, Plus, Trash } from "phosphor-react";
import imgTeste from '../../../../assets/photoCardCoffees/CafeComLeite.svg'
import { CardSelect } from "./Style";

export function CardCoffeeSelection(){
    return(   
        <CardSelect>
            <figure>
                <img src={imgTeste} alt=""/>
            </figure>
            <div>
                <p>Expresso Tradicional</p>
                <div>
                    <div>
                        <Minus size={15}/>
                        <p>
                        1
                        </p>
                        <Plus size={15} />
                    </div>
                    <div>
                        <Trash size={20} />
                        <p>Remover</p>
                    </div>
                    <p>
                        R$<span>9.99</span>
                    </p>
                </div>
            </div>
        </CardSelect>
    )
}