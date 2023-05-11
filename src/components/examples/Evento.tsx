import { IconMinus, IconPlus } from "@tabler/icons-react"
import { useState } from "react"

export default function Evento() {

    const [valor, setValor] = useState(0)

    function increment() {
        setValor(valor + 1)
        console.log('Valor....', valor)
    }

    function decrement() {
        setValor(valor - 1)
    }
    return (
        <div className={`
            flex flex-col gap-4 items-center justify-center
            bg-black text-white h-screen`}>
            <span className="text-3xl"><b>Valor: </b> {valor}</span>

            <div className="flex gap-4">
                <button onClick={increment}>
                    <IconPlus />
                </button>

                <button onClick={decrement}>
                    <IconMinus />
                </button>
            </div>
        </div>
    )
}