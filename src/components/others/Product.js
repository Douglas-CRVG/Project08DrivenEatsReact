import React, {useState} from 'react'

export default function Product(props) {
    const {product} = props;
    const {imgProduct, nameProduct, descriptionProduct, priceProduct } = product;
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
        <div className={`itens margem-esq ${select}`} onClick = {selecionar} >
            <img src={imgProduct} alt="" />
            <p className="produto">{nameProduct}</p>
            <p className="descricao">{descriptionProduct}</p>
            <p className="preco">R$ <strong>{priceProduct}</strong></p>
        </div>
    )
}