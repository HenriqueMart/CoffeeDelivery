import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import transitionImagen from "../../assets/Illustration.svg"
import { Ico, InformatioAddress, MainContainer, TitleConfirm } from "./style";
import { useLocation } from "react-router-dom";

export function Confirm(){
    const location = useLocation();
    const data = location.state as {
        Rua: string;
        Numero: number;
        Bairro: string;
        Cidade: string;
        UF: string;
        paymentMethod: string
    };

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
                                <Ico $statusColor="purple">
                                <MapPin size={15} weight="fill" />
                                </Ico>
                            <div>
                                <p>Entrega em Rua <span>{data.Rua}</span></p>
                                <p><span>{data.Bairro} - {data.Cidade}, {data.UF}</span></p>
                            </div>
                        </div>
                        <div>
                            <Ico $statusColor="yellow">
                                <Timer size={15} weight="fill" />
                            </Ico>
                            <div>
                                <p>Previsão de Entrega</p>
                                <p>20 min - 30 min</p>
                            </div>
                        </div>
                        <div>
                            <Ico $statusColor="orange">
                                <CurrencyDollar size={15} />
                            </Ico>
                            <div>
                                <p>Pagamento na entrega</p>
                                <p><span>{data.paymentMethod}</span></p>
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