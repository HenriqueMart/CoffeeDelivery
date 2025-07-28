import { Bank, CreditCard, CurrencyDollar, Minus, Money, Plus, Trash } from "phosphor-react";

export function Checkout(){
    return (
        <main>
            <article>
                <h1>Complete seu pedido</h1>
                <div>
                    <form action="">
                        <input type="number" name="CEP" id="CEP" placeholder="CEP"/>
                        <input type="text" name="" id="" placeholder="Rua"/>
                        <input type="number" name="" id="" placeholder="Número"/>
                        <input type="text" placeholder="Complement Opcional"/>
                        <input type="text" placeholder="Bairro"/>
                        <input type="text" placeholder="Cidade" />
                        <input type="text" placeholder="UF"/>
                    </form>
                </div>
                <div>
                    <CurrencyDollar size={32} />
                    <h2>Pagamento</h2>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    <div>
                        <button>
                            <CreditCard size={32} />
                            <p>Cartão de Crédito</p>
                        </button>
                        <button>
                            <Bank size={32} />
                            <p>Cartão de Débito</p>
                        </button>
                        <button>
                            <Money size={32} />
                            <p>Dinheiro</p>
                        </button>
                    </div>
                </div>
            </article>
            <aside>
                <h1>Cafés Selecionados</h1>
                <article>
                    <div>
                        <img src="" alt="" />
                        <div>
                            <p>Expresso Tradicional</p>
                            <div>
                                <div>
                                    <Minus size={12}/>
                                    <p>
                                    1
                                    </p>
                                    <Plus size={12} />
                                </div>
                                <div>
                                    <Trash size={32} />
                                    <p>Remover</p>
                                </div>
                            </div>
                            <p>
                                R$<span>9.99</span>
                            </p>
                        </div>
                        <div>
                            <p>Total de itens</p>
                            <p>9.99</p>
                            <p>entrega</p>
                            <p>3.00</p>
                            <h2>Total</h2>
                            <h2>12.00</h2>
                            <button>
                                Confirmar pedido
                            </button>
                        </div>
                    </div>
                </article>
            </aside>
        </main>
    )
}