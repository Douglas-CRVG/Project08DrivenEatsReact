import Product from "../others/Product";

export default function MenuDessert() {
    const desserts = [
        {imgProduct: "assets/sobremesa1.jpg", nameProduct:"Mousse de Maracujá", descriptionProduct:"Compre um e peça outro, você vai querer", priceProduct:"4,90" },
        {imgProduct:"assets/sobremesa2.jpg", nameProduct:"Gostosura de chocolate", descriptionProduct: "Compre uma e queira mais, você vai gostar", priceProduct:"6,90" },
        {imgProduct:"assets/sobremesa3.jpg", nameProduct:"Tortaça de limão", descriptionProduct:"Compre uma e leve outra pelo mesmo preço", priceProduct:"19,90" },
        {imgProduct:"assets/sobremesa4.jpg", nameProduct:"Pudim", descriptionProduct:"Compre um e depois outro, você vai amar", priceProduct:"7,90" }
    ];
    
    return (
        <div className="scroll">
            {desserts.map((dessert, index) => {
                const {
                    imgProduct,
                    nameProduct,
                    descriptionProduct,
                    priceProduct
                } = dessert;
                return (<Product key={index} imgProduct={imgProduct} nameProduct={nameProduct} descriptionProduct={descriptionProduct} priceProduct={priceProduct} />)
                })}
        </div>
    );
}