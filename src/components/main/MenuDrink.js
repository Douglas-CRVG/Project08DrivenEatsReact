import Product from "../others/Product";

export default function MenuDrink() {
    const drinks = [
        {imgProduct:"assets/bebida1.jpg", nameProduct:"Pepsi", descriptionProduct:"Beba gelado!", priceProduct:"4,90" },
        {imgProduct:"assets/bebida2.jpg", nameProduct:"Água", descriptionProduct:"Beba 2L por dia!", priceProduct:"1,85" },
        {imgProduct:"assets/bebida3.jpg", nameProduct:"Suco de Laranja", descriptionProduct:"Beba! Rico em vitamina C!", priceProduct:"11,90" },
        {imgProduct:"assets/bebida4.jpg", nameProduct:"Guaraná Antarctica", descriptionProduct:"Beba gelado!", priceProduct:"9,90" }
    ];
    return (
        <div className="scroll">
            {drinks.map((drink, index) => {
                const {
                    imgProduct,
                    nameProduct,
                    descriptionProduct,
                    priceProduct
                } = drink;
                return (<Product key={index} imgProduct={imgProduct} nameProduct={nameProduct} descriptionProduct={descriptionProduct} priceProduct={priceProduct} />)
                })}
        </div>
    );
}