import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import transitionImagen from "../../assets/ConfirmPage/Illustration.svg"
import { MainContainer, TitleConfirm } from "./style";

export function Confirm(){


    return (
        <>
            <MainContainer>
                <article>
                    <TitleConfirm>
                        <h1>Uhu! Pedido Confirmado</h1>
                        <p>Agora é só aguardar que logo o café chegará até você</p>
                    </TitleConfirm>
                    <div>
                        <div>
                            <span>
                                <MapPin size={32} weight="fill" />
                            </span>
                            <p>Entrega em <span>Rua João Martinelli, 102</span></p>
                            <p>Ferrapos - Porto Alegre, RS</p>
                        </div>
                        <div>
                            <span>
                                <Timer size={32} weight="fill" />
                            </span>
                            <p>Previsão de Entrega</p>
                            <p>20 min - 30 min</p>
                        </div>
                        <div>
                            <span>
                                <CurrencyDollar size={32} />
                            </span>
                            <p>Pagamento na entrega</p>
                            <p><span>Cartão de Crédito</span></p>
                        </div>
                    </div>
                </article>
                <aside>
                    <figure>
                        <img src={transitionImagen} alt="Imagens de uma moto de delivery ilustração"/>
                    </figure>
                </aside>
            </MainContainer>
        </>
    )
}