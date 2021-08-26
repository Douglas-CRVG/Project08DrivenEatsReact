import Product from "../others/Product";

export default function MenuFood() {
    const foods = [
        {imgProduct:"assets/comida1.jpg", nameProduct:"Cachorrão", descriptionProduct:"Um pouco de batata, um pouco de salada", priceProduct: "10,90"},
        {imgProduct:"assets/comida2.jpg", nameProduct:"Pizzona", descriptionProduct:"Um pouco de tudo", priceProduct: "24,90"},
        {imgProduct:"assets/comida3.jpg", nameProduct:"Macarrão bonzão", descriptionProduct:"Um pouco de massa italiana", priceProduct: "15,90"},
        {imgProduct:"assets/comida4.jpg", nameProduct:"Feijoada", descriptionProduct:"Um pouco de cada bicho", priceProduct: "17,90"}
    ];

    return (
        <div className="scroll">
            {foods.map((food, index) => {
                const {
                    imgProduct,
                    nameProduct,
                    descriptionProduct,
                    priceProduct
                } = food;
                return (<Product key={index} imgProduct={imgProduct} nameProduct={nameProduct} descriptionProduct={descriptionProduct} priceProduct={priceProduct} />)
                })
            }
        </div>
    );
}