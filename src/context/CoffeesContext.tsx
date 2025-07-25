import { createContext, useEffect, useState, type ReactNode } from "react";
import mockData from '../data/mockData.json';


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