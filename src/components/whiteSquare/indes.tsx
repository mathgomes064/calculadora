import { ApiContext, IData } from "../../providers/ApiContext"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { WhiteSquare } from "./style"
import { useContext } from "react"
import * as yup from "yup"

export default function Square(){
    const { calculateValue, value } = useContext(ApiContext)

    console.log(value)

    const formSchema = yup.object().shape({
        amount: yup.string().required("Valor da venda obrigatório"),
        installments: yup.string().required("Numero de parcelas obrigatório"),
        mdr: yup.string().required("Valor do MDR obrigatório")
    })

    const {register, handleSubmit, formState: { errors }} = useForm<IData>({
        resolver: yupResolver(formSchema)
    })

    return(
        <WhiteSquare>
            <div className="leftDiv">
                <div className="innerLeftDiv">
                    <h1>Simule sua Antecipação</h1>
                    <form onSubmit={handleSubmit(calculateValue)}>
                        <label>Informe o valor da venda *</label>
                        <input placeholder="-" {...register("amount")} type="number" step="0.01" min="0.01" />
                        <span className="error">{errors.amount?.message}</span>
                        <label>Em quantas parcelas *</label>
                        <input placeholder="-" {...register("installments")} type="number" />
                        <span className="error">{errors.installments?.message}</span>
                        <span>Máximo de 12 parcelas</span>
                        <label>informe o percentual de MDR *</label>
                        <input placeholder="-" {...register("mdr")} type="number" />
                        <span className="error">{errors.mdr?.message}</span>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
            <div className="rightDiv">
                <div>
                    <h1>VOCÊ RECEBERÁ:</h1>
                    <p>Amanhã: <span>R$ {value === ""? ("0,00"):(value[1])}</span></p>
                    <p>Em 15 dias: <span>R$ {value === ""? ("0,00"):(value[15])}</span></p>
                    <p>Em 30 dias: <span>R$ {value === ""? ("0,00"):(value[30])}</span></p>
                    <p>Em 90 dias: <span>R$ {value === ""? ("0,00"):(value[90])}</span></p>
                </div>
            </div>
        </WhiteSquare>
    )
}