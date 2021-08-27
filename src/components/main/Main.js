/*import MenuFood from './MenuFood'
import MenuDrink from './MenuDrink'
import MenuDessert from './MenuDessert'*/
import Menu from './Menu'

export default function Main() {
    const menu = [
        {
            title: "Primeiro, seu prato",
            products: [
                {imgProduct:"assets/comida1.jpg", nameProduct:"Cachorrão", descriptionProduct:"Um pouco de batata, um pouco de salada", priceProduct: "10,90"},
                {imgProduct:"assets/comida2.jpg", nameProduct:"Pizzona", descriptionProduct:"Um pouco de tudo", priceProduct: "24,90"},
                {imgProduct:"assets/comida3.jpg", nameProduct:"Macarrão bonzão", descriptionProduct:"Um pouco de massa italiana", priceProduct: "15,90"},
                {imgProduct:"assets/comida4.jpg", nameProduct:"Feijoada", descriptionProduct:"Um pouco de cada bicho", priceProduct: "17,90"}
            ]
        },
        {
            title: "Agora, sua bebida",
            products: [
                {imgProduct:"assets/bebida1.jpg", nameProduct:"Pepsi", descriptionProduct:"Beba gelado!", priceProduct:"4,90" },
                {imgProduct:"assets/bebida2.jpg", nameProduct:"Água", descriptionProduct:"Beba 2L por dia!", priceProduct:"1,85" },
                {imgProduct:"assets/bebida3.jpg", nameProduct:"Suco de Laranja", descriptionProduct:"Beba! Rico em vitamina C!", priceProduct:"11,90" },
                {imgProduct:"assets/bebida4.jpg", nameProduct:"Guaraná Antarctica", descriptionProduct:"Beba gelado!", priceProduct:"9,90" }
            ]
        },
        {
            title: "Por fim, sua sobremesa",
            products: [
                {imgProduct:"assets/sobremesa1.jpg", nameProduct:"Mousse de Maracujá", descriptionProduct:"Compre um e peça outro, você vai querer", priceProduct:"4,90" },
                {imgProduct:"assets/sobremesa2.jpg", nameProduct:"Gostosura de chocolate", descriptionProduct:"Compre uma e queira mais, você vai gostar", priceProduct:"6,90" },
                {imgProduct:"assets/sobremesa3.jpg", nameProduct:"Tortaça de limão", descriptionProduct:"Compre uma e leve outra pelo mesmo preço", priceProduct:"19,90" },
                {imgProduct:"assets/sobremesa4.jpg", nameProduct:"Pudim", descriptionProduct:"Compre um e depois outro, você vai amar", priceProduct:"7,90" }
            ]
        }
    ];

    return (
        <main>
            <Menu menu={menu} />
        </main>
    );
}