import { createContext, useEffect, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import mockData from '../data/mockData.json';

//Itens do carrinho
type CartItem = {
    id: number;
    quantity: number;
}

type CardContextType = {
    Cart: CartItem[];
    setCart: Dispatch<SetStateAction<CartItem[]>>; //Declarando o tipo de Set para o TS, Podendo passar uma função ou um objeto
    addToCart: (id: number, quantity: number) => void;
}

export const CartContext = createContext<CardContextType>({} as CardContextType);

export function CartProvider({children}: DataContextProviderProps){
    const [cart, setCart] = useState<CartItem[]>([]);

    function addToCart(id: number, quantity:number){
        setCart((prevCart) => {
            const itemIndex = prevCart.findIndex(item => item.id === id);
            if(itemIndex >= 0){
            
                return prevCart.map((item, index) => 
                    index === itemIndex 
                    ? {...item, quantity: item.quantity + quantity} : item
                );
            }else{
                return [...prevCart, {id, quantity}];
            }
        })
    }
    return(
        <CartContext.Provider value={{Cart: cart, setCart, addToCart}}>
            {children}
        </CartContext.Provider>
    );
}


//Dados do coffee
interface DataCoffees{
    id: number;
    content: {
        photo: string,
        title: string,
        tag: string[],
        subtitle: string,
        valor: number,
    };
}

interface DataContextProviderProps{
    children: ReactNode
}

export const CoffesContext = createContext<DataCoffees[] | undefined>(undefined);

export function DataProvider({children}: DataContextProviderProps) {
    const [dados, setDados] = useState<DataCoffees[]>([]);

    useEffect(() => {

            setDados(mockData);

    }, [])


    return (
        <CoffesContext.Provider value={dados}>
            {children}
        </CoffesContext.Provider>
    )
}