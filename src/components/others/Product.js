import React, { useState } from "react";

export default function Product(props) {
    const { product, count, setCount } = props;
    const { type, imgProduct, nameProduct, descriptionProduct, priceProduct } = product;
    const [select, setSelect] = useState("");
    const [hidden, setHidden] = useState("desabilitado");
    const [counter, setCounter] = useState(0);

    function selecionar(type) {
        if (select === "") {
            activateButton(type, true);
            setSelect("select");
            setHidden("")
            setCounter(counter + 1)

        } else {
            activateButton(type, false);
            setSelect("");
            setHidden("desabilitado")
            setCounter(0);
        }
    }

    function quantity(what, e) {
        e.stopPropagation();
        if (what === "add") {
            setCounter(counter + 1);
            console.log(counter);
        } else {
            setCounter(counter - 1);
        }

        if (counter <= 1 && what === "sub") {
            setSelect("");
            setHidden("desabilitado");
        }
    }

    function activateButton(type, bool) {
        if (bool === true) {

            if (type === "dish") {
                count.dish++;
            } else if (type === "drink") {
                count.drink++;
            } else if (type === "dessert") {
                count.dessert++;
            }
            console.log(count);
        } else {
            if (type === "dish") {
                count.dish--;
            } else if (type === "drink") {
                count.drink--;
            } else if (type === "dessert") {
                count.dessert--;
            }
        }

        setCount(count);

        console.log(bool)
        console.log(type)
    }

    return (
        <div className={`item margem-esq ${select}`} >
            <div className="product" onClick={() => selecionar(type)}>
                <img src={imgProduct} alt="" />
                <p className="name">{nameProduct}</p>
                <p className="description">{descriptionProduct}</p>
                <p className="price">R$ <strong>{priceProduct}</strong></p>
            </div>
            <div className={`container-counter ${hidden}`}>
                <ion-icon onClick={(e) => quantity("sub", e)} name="remove-outline"></ion-icon>
                {counter}
                <ion-icon onClick={(e) => quantity("add", e)} name="add-outline"></ion-icon>
            </div>

        </div>
    );
}