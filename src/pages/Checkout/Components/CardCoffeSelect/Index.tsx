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
    handleImplementsCoffee: (id: number) => void;
    handleDescrementsCoffee: (id: number) => void;
}

export function CardCoffeeSelection({id, quantity, content, handleDeleteCoffee, handleImplementsCoffee, handleDescrementsCoffee}: CardSelection){
    
    const allContentValor = content.valor * quantity;

    return(   
             <CardSelect key={id}>
                <figure>
                    <img
                        src={`${import.meta.env.BASE_URL}${content.photo}`}
                        alt="Imagem do Café"
                    />
                </figure>
                <InformationCard>
                        <NamePrice>
                            <p>{content.title}</p>
                            <h3>R$<span>{allContentValor.toFixed(2)}</span></h3>
                        </NamePrice>
                        <ActionCardSelection>
                            <div>
                                <Minus size={20} onClick={() => handleDescrementsCoffee(id)}/>
                                <p>
                                {quantity}
                                </p>
                                <Plus size={20} onClick={() => handleImplementsCoffee(id)}/>
                            </div>
                            <div onClick={() => handleDeleteCoffee(id)}>
                   
                                <Trash size={20} />

                                <p>Remover</p>
                            </div>
                        </ActionCardSelection>
                </InformationCard>
            </CardSelect>

    )
}