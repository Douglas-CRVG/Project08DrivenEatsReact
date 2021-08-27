export default function Product(props) {
    console.log(props);
    const {product} = props;
    const {imgProduct, nameProduct, descriptionProduct, priceProduct } = product;
    return (
        <div className="itens margem-esq sobremesa">
            <img src={imgProduct} alt="" />
            <p className="produto">{nameProduct}</p>
            <p className="descricao">{descriptionProduct}</p>
            <p className="preco">R$ <strong>{priceProduct}</strong></p>
        </div>
    )
}