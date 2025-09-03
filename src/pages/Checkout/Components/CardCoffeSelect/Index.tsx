import { Minus, Plus, Trash } from "phosphor-react";
import { ActionCardSelection, CardSelect, InformationCard, NamePrice} from "./Style";

type Content = {
    photo: string;
    title: string;
    tag: string[];
    subtitle: string;
    valor: number;
}

type CardSelection = {
    id: number;
    content: Content;
    quantity: number;
    handleDeleteCoffee: (id: number) => void;
}

export function CardCoffeeSelection({id, quantity, content, handleDeleteCoffee}: CardSelection){

    function deleteCoffee() {
        handleDeleteCoffee(id);
    }

    return(   
             <CardSelect key={id}>
                <figure>
                    <img src={content.photo} alt="Imagens do Café"/>
                </figure>
                <InformationCard>
                        <NamePrice>
                            <p>{content.title}</p>
                            <h3>R$<span>{content.valor.toFixed(2)}</span></h3>
                        </NamePrice>
                        <ActionCardSelection>
                            <div>
                                <Minus size={20}/>
                                <p>
                                {quantity}
                                </p>
                                <Plus size={20} />
                            </div>
                            <div onClick={deleteCoffee}>
                   
                                <Trash size={20} />

                                <p>Remover</p>
                            </div>
                        </ActionCardSelection>
                </InformationCard>
            </CardSelect>

    )
}