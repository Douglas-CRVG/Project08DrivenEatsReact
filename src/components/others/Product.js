import React, { useState } from "react";



export default function Product(props) {
    const { product } = props;
    const { type, imgProduct, nameProduct, descriptionProduct, priceProduct } = product;
    const [select, setSelect] = useState("");
    const [hidden, setHidden] = useState("desabilitado");
    const [counter, setCounter] = useState(1);

    let countDish = 0;
    let countDrink = 0;
    let countDessert = 0;

    function selecionar(type) {
        if (select === "") {
            setSelect("select");
            setHidden("")
            activateButton(type, true);
        } else {
            setSelect("");
            setHidden("desabilitado")
            activateButton(type, false);
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

    function activateButton(type, bool) {
        if (bool === true) {
            if (type === "dish") {
                countDish++;
            } else if (type === "drink") {
                countDrink++;
            } else if (type === "dessert") {
                countDessert++;
            }
        } else {
            if (type === "dish") {
                countDish--;
            } else if (type === "drink") {
                countDrink--;
            } else if (type === "dessert") {
                countDessert--;
            }
        }
    
        console.log(countDish);
        console.log(countDessert);
        console.log(countDrink);
    }

    return (
        <div className={`item margem-esq ${select}`} >
            <div className="product" onClick={() => selecionar({ type })}>
                <img src={imgProduct} alt="" />
                <p className="name">{nameProduct}</p>
                <p className="description">{descriptionProduct}</p>
                <p className="price">R$ <strong>{priceProduct}</strong></p>
            </div>
            <div className={`container-counter ${hidden}`}>
                <ion-icon onClick={() => quantity("sub")} name="remove-outline"></ion-icon>
                {counter}
                <ion-icon onClick={() => quantity("add")} name="add-outline"></ion-icon>
            </div>
        </div>
    );
}