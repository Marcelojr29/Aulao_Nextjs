import Layout from "@/components/Layout";
import { useState } from "react";

export default function Estado() {
    const [numero, setNumero] = useState(0)

    function Incrementar() {
        setNumero(numero + 1)
    }

    return (
        <Layout titulo="Componente com estado">
            <span>{numero}</span>
            <button onClick={Incrementar}>Incrementar</button>
        </Layout>
    )
}