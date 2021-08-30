import React, { useState } from 'react';

export default function Footer(props) {
    const [button, setButton] = useState("Selecione os 3 itens para fechar o pedido");
    const {count, setCount} = props;
    setCount (count)

    return (
        <footer className="barra">
            <div className="botao-pedido">
                <p>{button}</p>
            </div>
        </footer>
    );
}