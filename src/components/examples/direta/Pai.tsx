import Filho from "./Filho"

export interface PaiProps {
    nome: string
    sobrenome: string
}

export default function Pai(props: PaiProps) {
    return (
        <div>
            <h1 className="text-xl font-bold">
                {props.nome} {props.sobrenome}
            </h1>
            <ul className="list-disc ml-12">
                <Filho nome="Alexia" sobrenome={props.sobrenome} />
                <Filho nome="Ana" sobrenome={props.sobrenome} />
                <Filho nome="Aline" sobrenome={props.sobrenome} />
                <Filho nome="Jack" sobrenome={props.sobrenome} />
            </ul>
        </div>
    )
}