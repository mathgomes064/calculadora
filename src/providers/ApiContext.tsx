import { createContext, useState } from "react"; 
import { IProvidersProps, IData, IContext } from "../interfaces";
import axios from "axios"



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