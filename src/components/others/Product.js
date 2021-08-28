import React, { useState } from "react";

export default function Product(props) {
    const { product } = props;
    const { imgProduct, nameProduct, descriptionProduct, priceProduct } = product;
    const [select, setSelect] = useState("");
    const [coisa, setCoisa] = useState(false);

    function selecionar() {
        setCoisa(() => !coisa);

        if (select === "") {
            setSelect("select");
        } else {
            setSelect("");
        }
    }

    return (
        <div className={`item margem-esq ${select}`} onClick={selecionar}>
            <div class="product">
                <img src={imgProduct} alt="" />
                <p className="name">{nameProduct}</p>
                <p className="description">{descriptionProduct}</p>
                <p className="price">R$ <strong>{priceProduct}</strong>
                </p>
            </div>
        </div>
    );
}


