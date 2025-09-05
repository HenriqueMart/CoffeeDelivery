import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, CurrencyCircleDollar  } from "phosphor-react";
import { AddressBox, AllSelectPrice, AsideCofferAll, BaseBoxTitle, CardPay, Form, MainContainer, PaymentType} from "./Styled.ts";
import { CardCoffeeSelection } from "./Components/CardCoffeSelect/Index.tsx";
import { useContext, useState } from "react";
import { CartContext, CoffesContext } from "../../context/CoffeesContext.tsx";
import {Controller, useForm} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

/* Zod */
const schema = z.object({
    CEP: z.coerce.number()
    .min(10000000, "O CEP deve ter 8 Dígito!") //Coerce -> Converter aquela informação para o type que foi declarado na frente, como CEP foi número
    .max(99999999, "CEP deve ter no máximo 8 dígito!"),
    Rua: z.coerce.string()
    .min(1, "Digite seu endereço para entrega!"),
    Numero: z.coerce.number().min(0, "Digite um número Válido, Caso seu número tenha letra informe no campo 'Complemento'")
    .max(1000, "Digite Número da Casa Menor que 1000!"),
    Complemento: z.coerce.string(),
    Bairro: z.coerce.string(),
    Cidade: z.coerce.string(),
    UF: z.coerce.string()
    .min(2, "Digita A sigla da seu Estado! Exemplo: Bahia - BA, São Paulo - SP!")
    .max(2, "Digita A sigla da seu Estado! Exemplo: Bahia - BA, São Paulo - SP!"),
    paymentMethod: z.coerce.string(),
});


export function Checkout(){

    //Navegação
    const navigate = useNavigate();

    //Hook Form
    const {register, handleSubmit, control, watch,formState: {errors}} = useForm({
        resolver: zodResolver(schema),
        mode: "onChange",
    });
    
    const selectedPayment = watch("paymentMethod");
    const [paymentError, setPaymentError] = useState("");
    
    const onSubmitNewOrder = (data:any) => {
        if(!selectedPayment){
            setPaymentError("Escolha uma forma de pagamento!");
            return;
        }
        setPaymentError("");
        console.log(data);
        navigate("/Confirm");
    }

    /* Contexto Cart(Carrinho) e Coffee(Café)*/
    const {Cart, setCart} = useContext(CartContext);
    const Coffee = useContext(CoffesContext);
    
    const cartWithDetails = Cart.map((item) => {
        const coffee = Coffee?.find((c) => c.id === item.id);
        return{
            ...coffee,
            quantity: item.quantity,
        };
    });    

    let allItens = 0;
    allPriceBuy()
    function allPriceBuy(){
        cartWithDetails.forEach((Coffee) => {
        allItens += (Coffee.content?.valor || 0) * Coffee.quantity
    });
    }

    function handleDeleteCoffee(id: number){
        setCart((prevCart) => prevCart.filter(coffee => coffee.id !== id))
        allPriceBuy()
    }

    function handleImplementsCoffee(id: number){
        setCart((prevCart) => prevCart.map((item) => 
            item.id === id ? {...item, quantity: item.quantity + 1} : item
        )
    );
    }

    function handleDescrementsCoffee(id: number){
        setCart((prevCart) => prevCart.map((item) =>
                item.id === id? (item.quantity > 1 ? {...item, quantity: item.quantity - 1}: item): item
        )
    )
    }

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
                    <Form 
                    id="formAddress"
                    onSubmit={ handleSubmit(onSubmitNewOrder)}>
                        <label id="Cep">
                            <input type="number" 
                            {...register('CEP', 
                                {
                                    required:true, 
                                }
                                )
                            }
                            
                            id="CEP" placeholder="CEP"/>
                            {errors.CEP && <span>{errors.CEP.message}</span>}
       
                        </label>
                        <label id="Rua">
                            <input type="text" {...register('Rua', {required:true})} 
                               
                                id="Rua" placeholder="Rua" 
                            />
                            {errors.Rua && <span>{errors.Rua.message}</span>}
                        </label>
                        <label id="Casa">
                            <input type="number" {...register('Numero', {required: true})} id="numero" placeholder="Número"/>
                            {errors.Numero && <span>{errors.Numero.message}</span>}
                            <input type="text" {...register('Complemento', {})} id="Complemento" placeholder="Complemento" />
                            {errors.Complemento && <span>{errors.Complemento.message}</span>}
                        </label>
                        <label id="Endereco">
                            <input type="text" {...register('Bairro', {required:true})} id="Bairro" placeholder="Bairro"/>
                            {errors.Bairro && <span>{errors.Bairro.message}</span>}
                            <input type="text" {...register('Cidade', {required:true})} id="cidade" placeholder="Cidade"/>
                            {errors.Cidade && <span>{errors.Cidade.message}</span>}
                            <input type="text" {...register('UF', {required:true})} id="Unidade Federal" placeholder="UF"/>
                            {errors.UF && <span>{errors.UF.message}</span>}
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
                        <Controller
                            name="paymentMethod"
                            control={control}
                            rules={{ required: "Escolha uma forma de pagamento!" }}
                            render={({ field }) => (
                                <CardPay>
                                <label>
                                    <input
                                    type="radio"
                                    value="credito"
                                    checked={field.value === "credito"}
                                    onChange={() => field.onChange("credito")}
                                    />
                                    <span><CreditCard size={20} /></span>
                                    <p>Cartão de Crédito</p>
                                </label>

                                <label>
                                    <input
                                    type="radio"
                                    value="debito"
                                    checked={field.value === "debito"}
                                    onChange={() => field.onChange("debito")}
                                    />
                                    <span><Bank size={20} /></span>
                                    <p>Cartão de Débito</p>
                                </label>

                                <label>
                                    <input
                                    type="radio"
                                    value="dinheiro"
                                    checked={field.value === "dinheiro"}
                                    onChange={() => field.onChange("dinheiro")}
                                    />
                                    <span><Money size={20} /></span>
                                    <p>Dinheiro</p>
                                </label>
                                <label>
                                    <input
                                    type="radio"
                                    value="Pix"
                                    checked={field.value === "Pix"}
                                    onChange={() => field.onChange("Pix")}
                                    />
                                    <span><CurrencyCircleDollar size={20} /></span>
                                    <p>Pix</p>
                                </label>

                                {paymentError && <span>{paymentError}</span>}
                            </CardPay>
                            )}
                            />
                            
                    </CardPay>
                </PaymentType>
            </article>
            <aside>
                <article>
                    <h1>Cafés Selecionados</h1>
                    <AsideCofferAll>
                        
                        {
                               cartWithDetails.map((coffee) => (
                                    <CardCoffeeSelection 
                                        key={coffee.id}
                                        id={coffee.id ?? 0}
                                        content={coffee.content!}
                                        quantity={coffee.quantity}
                                        handleDeleteCoffee={handleDeleteCoffee}
                                        handleImplementsCoffee={handleImplementsCoffee}
                                        handleDescrementsCoffee={handleDescrementsCoffee}
                                    />
                                ))
                        }
           
         
                        
                        <AllSelectPrice>
                            <div>
                                <p>Total de itens</p>
                                <p><span>R$</span>{allItens.toFixed(2)}</p>
                            </div>
                            <div>
                                <p>Entrega</p>
                                <p><span>R$</span>3.00</p>
                            </div>
                            <div>
                                <h2>Total</h2>
                                <h2><span>R$</span>{(allItens + 3).toFixed(2)}</h2>
                            </div>
                            <div>
                                    <button 
                                        type="submit" 
                                        form="formAddress"
                                        >
                                            Confirmar Compra
                                    </button>
                            </div>
                        </AllSelectPrice>
                    </AsideCofferAll>
                </article>
            </aside>
        </MainContainer>
    )
}