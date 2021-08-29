import React, { useState } from "react";

export default function Product(props) {
    const { product } = props;
    const { imgProduct, nameProduct, descriptionProduct, priceProduct } = product;
    const [select, setSelect] = useState("");
    const [hidden, setHidden] = useState("desabilitado");
    const [counter, setCounter] = useState(1);

    function selecionar() {
        if (select === "") {
            setSelect("select");
            setHidden("")
        } else {
            setSelect("");
            setHidden("desabilitado")
        }
    }

    function quantity(what) {
        if (what === "add") {
            setCounter(counter + 1);
        } else {
            setCounter(counter - 1);
        }

        if (counter < 2) {
            setSelect("");
            setHidden("desabilitado");
        }
    }

    return (
        <div className={`item margem-esq ${select}`} >
            <div class="product" onClick={selecionar}>
                <img src={imgProduct} alt="" />
                <p className="name">{nameProduct}</p>
                <p className="description">{descriptionProduct}</p>
                <p className="price">R$ <strong>{priceProduct}</strong></p>
            </div>
            <div class={`container-counter ${hidden}`}>
                <ion-icon onClick={() => quantity("sub")} name="remove-outline"></ion-icon>
                {counter}
                <ion-icon onClick={() => quantity("add")} name="add-outline"></ion-icon>
            </div>
        </div>
    );
}