import { Minus, Plus, Trash } from "phosphor-react";
import imgTeste from '../../../../assets/photoCardCoffees/CafeComLeite.svg'
import { ActionCardSelection, CardSelect, InformationCard, NamePrice} from "./Style";

export function CardCoffeeSelection(){
    return(   
             <CardSelect>
                <figure>
                    <img src={imgTeste}/>
                </figure>
                <InformationCard>
                        <NamePrice>
                            <p>Expresso Tradicional</p>
                            <h3>R$<span>9,90</span></h3>
                        </NamePrice>
                        <ActionCardSelection>
                            <div>
                                <Minus size={20}/>
                                <p>
                                1
                                </p>
                                <Plus size={20} />
                            </div>
                            <div>
                   
                                <Trash size={20} />

                                <p>Remover</p>
                            </div>
                        </ActionCardSelection>
                </InformationCard>
            </CardSelect>

    )
}