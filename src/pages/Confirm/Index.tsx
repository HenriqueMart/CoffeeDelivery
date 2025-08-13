import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import transitionImagen from "../../assets/ConfirmPage/Illustration.svg"
import { Ico, InformatioAddress, MainContainer, TitleConfirm } from "./style";

export function Confirm(){


    return (
        <>
            <MainContainer>
                <article>
                    <TitleConfirm>
                        <h1>Uhu! Pedido Confirmado</h1>
                        <p>Agora é só aguardar que logo o café chegará até você</p>
                    </TitleConfirm>
                    <InformatioAddress>
                        <div>
                            <Ico>
                                <MapPin size={15} weight="fill" />
                            </Ico>
                            <div>
                                <p>Entrega em <span>Rua João Martinelli, 102</span></p>
                                <p>Ferrapos - Porto Alegre, RS</p>
                            </div>
                        </div>
                        <div>
                            <Ico>
                                <Timer size={15} weight="fill" />
                            </Ico>
                            <div>
                                <p>Previsão de Entrega</p>
                                <p>20 min - 30 min</p>
                            </div>
                        </div>
                        <div>
                            <Ico>
                                <CurrencyDollar size={15} />
                            </Ico>
                            <div>
                                <p>Pagamento na entrega</p>
                                <p><span>Cartão de Crédito</span></p>
                            </div>
                        </div>
                    </InformatioAddress>
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