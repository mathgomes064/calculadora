import { ReactNode } from "react"; 

export interface IProvidersProps{
    children: ReactNode;
}

export interface IData{
    amount?: number;
    installments?: number;
    mdr?: number;
}

export interface IContext{
    calculateValue: (
        data: IData
    ) => void;
    value: string
}