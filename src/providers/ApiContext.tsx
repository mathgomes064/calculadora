import { createContext, useState, ReactNode } from "react"; 
import axios from "axios"

interface IProvidersProps{
    children: ReactNode;
}

export interface IData{
    amount?: number;
    installments?: number;
    mdr?: number;
}

interface IContext{
    calculateValue: (
        data: IData
    ) => void;
    value: string
}

export const ApiContext = createContext<IContext>({} as IContext)

export const CalculatorProvider = ({children}: IProvidersProps) =>{
    const [value, setValue] = useState("")

    function calculateValue(data: IData){
        axios.post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", data)
            .then((response) => setValue(response.data))
            .catch((err) => console.log(err))
    }

    return(
        <ApiContext.Provider value={{ calculateValue, value }}>
            {children}
        </ApiContext.Provider>
    )
}