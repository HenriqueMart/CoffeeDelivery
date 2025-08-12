import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money} from "phosphor-react";
import { AddressBox, AllSelectPrice, AsideCofferAll, BaseBoxTitle, CardPay, Form, MainContainer, PaymentType} from "./Styled.ts";
import { CardCoffeeSelection } from "./Components/CardCoffeSelect/Index.tsx";
import { NavLink } from "react-router-dom";


export function Checkout(){
    return (
        <MainContainer>
            <article>
                <h1>Complete seu pedido</h1>
                <AddressBox>
                    <BaseBoxTitle>
                        <span>
                            <MapPinLine size={20} />
                        </span>
                        <div>
                            <h2>Endereço de Entrega</h2> 
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                       </div>
                       
                    </BaseBoxTitle>
                    
                    <Form action="#">
                        <label id="Cep">
                            <input type="number" name="CEP" id="CEP" placeholder="CEP" required/>
                        </label>
                        <label id="Rua">
                            <input type="text" name="" id="Rua" placeholder="Rua" required/>
                        </label>
                        <label id="Casa">
                            <input type="number" name="Numero" id="numero" placeholder="Número" required/>
                            <input type="text" id="Complemento" placeholder="Complemento" />
                        </label>
                        <label id="Endereco">
                            <input type="text" id="Bairro" placeholder="Bairro" required/>
                            <input type="text" id="cidade" placeholder="Cidade" required/>
                            <input type="text" id="Unidade Federal" placeholder="UF" required/>
                        </label>
                    </Form>
                </AddressBox>

                <PaymentType>
                    <BaseBoxTitle>
                        <span>
                            <CurrencyDollar size={28}/>
                        </span>
                        <div>
                            <h2>Pagamento</h2>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </BaseBoxTitle>
                    <CardPay>
                            <button>
                                <span>
                                    <CreditCard size={20} />
                                </span>
                                <p>Cartão de Crédito</p>
                            </button>
                            <button>
                                <span>
                                    <Bank size={20} />
                                </span>
                                <p>Cartão de Débito</p>
                            </button>
                            <button>
                                <span>
                                    <Money size={20} />
                                </span>
                                <p>Dinheiro</p>
                            </button>
                    </CardPay>
                </PaymentType>
            </article>
            <aside>
                <article>
                    <h1>Cafés Selecionados</h1>
                    <AsideCofferAll>
                        
                        <CardCoffeeSelection/>
                        <CardCoffeeSelection/>
                        
                        <AllSelectPrice>
                            <div>
                                <p>Total de itens</p>
                                <p><span>R$</span>9.99</p>
                            </div>
                            <div>
                                <p>Entrega</p>
                                <p><span>R$</span>3.00</p>
                            </div>
                            <div>
                                <h2>Total</h2>
                                <h2><span>R$</span>12.00</h2>
                            </div>
                            <div>
                                <NavLink to="/Confirm">
                                    <button>
                                            Confirmar Compra
                                    </button>
                                </NavLink>
                                
                            </div>
                            
                            
                            
      
                            
                        </AllSelectPrice>
                    </AsideCofferAll>
                    
                </article>
            </aside>
        </MainContainer>
    )
}