export default function Product(props) {
    //const {product} = props.product;
    //const {imgProduct, nameProduct, descriptionProduct, priceProduct } = product;
    const {imgProduct, nameProduct, descriptionProduct, priceProduct } = props
    return (
        <div className="itens margem-esq sobremesa">
            <img src={imgProduct} alt="" />
            <p className="produto">{nameProduct}</p>
            <p className="descricao">{descriptionProduct}</p>
            <p className="preco">R$ <strong>{priceProduct}</strong></p>
        </div>
    )
}