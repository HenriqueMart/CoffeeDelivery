import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import banner_coffee from '../../assets/home/Imagem.svg';
import { Description, IconeDescrition, Main, ProductDescription, SectionCaffee } from './Styled';


export function Home(){
    return(
    <>
        <Main>
            <article>
                <div>
                    <Description>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </Description>
                    <ProductDescription>
                    <div>
                        <p><IconeDescrition statusColor="yellow_dark"><ShoppingCart size={16} weight='fill' color='white' /></IconeDescrition> Compra simples e segura</p>
                        <p><IconeDescrition statusColor="yellow"><Timer size={16} weight='fill' color='white'/></IconeDescrition> Entrega rápido e rastreada</p>
                    </div>
                    <div>
                        <p><IconeDescrition statusColor="base_title"><Package size={16} weight='fill' color='white'/></IconeDescrition> Embalagem mantém o café intacto</p>
                        <p><IconeDescrition statusColor="purple"><Coffee size={16} weight='fill' color='white'/></IconeDescrition> O café chega fresquinho até você</p>
                    </div>
                    </ProductDescription>
                </div>
                <figure>
                    <img src={banner_coffee}/>
                </figure>
            </article>
        </Main>
        <SectionCaffee>
            <div>
                <div>
                    <h1>Nossos Cafés</h1>
                </div>
                <div>
                    <div>
                        <div>
                            <figure>
                                <img src="" />
                            </figure>
                            <p>TRADICIONAL</p>
                            <h2>
                                Expresso Tradicional
                            </h2>
                            <p>
                                O tradicional Café feito com água quente e grãos moídos
                            </p>
                        </div>
                        <div>
                            <div>
                                <p>
                                    R$ <span>9,90</span>
                                </p>
                            </div>
                            <div>
                                <p>-</p>
                                <input type="number" name="" id="" />
                                <p>+</p>
                            </div>
                            <div>
                                <ShoppingCart size={32}/>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </SectionCaffee>
    </>
    )
}