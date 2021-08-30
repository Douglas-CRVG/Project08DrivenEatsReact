/*import MenuFood from './MenuFood'
import MenuDrink from './MenuDrink'
import MenuDessert from './MenuDessert'*/
import Menu from './Menu'
import React, {useState} from 'react';
import Footer from './footer/Footer';

export default function Main() {

    const [count, setCount] = useState({
        dish: 0,
        drink: 0,
        dessert: 0
    })

    const menu = [
        {
            title: "Primeiro, seu prato",
            products: [
                { type: "dish", imgProduct: "assets/comida1.jpg", nameProduct: "Cachorrão", descriptionProduct: "Com tudo dentro", priceProduct: "10,90" },
                { type: "dish", imgProduct: "assets/comida2.jpg", nameProduct: "Pizzona", descriptionProduct: "Um pouco de tudo", priceProduct: "24,90" },
                { type: "dish", imgProduct: "assets/comida3.jpg", nameProduct: "Macarronada", descriptionProduct: "Um pouco de massa italiana", priceProduct: "15,90" },
                { type: "dish", imgProduct: "assets/comida4.jpg", nameProduct: "Feijoada", descriptionProduct: "Um pouco de cada bicho", priceProduct: "17,90" }
            ]
        },
        {
            title: "Agora, sua bebida",
            products: [
                { type: "drink", imgProduct: "assets/bebida1.jpg", nameProduct: "Pepsi", descriptionProduct: "Beba gelado!", priceProduct: "4,90" },
                { type: "drink", imgProduct: "assets/bebida2.jpg", nameProduct: "Água", descriptionProduct: "Beba 2L por dia!", priceProduct: "1,85" },
                { type: "drink", imgProduct: "assets/bebida3.jpg", nameProduct: "Suco de Laranja", descriptionProduct: "Beba! Rico em vitamina C!", priceProduct: "11,90" },
                { type: "drink", imgProduct: "assets/bebida4.jpg", nameProduct: "Guaraná Antarctica", descriptionProduct: "Beba gelado!", priceProduct: "9,90" }
            ]
        },
        {
            title: "Por fim, sua sobremesa",
            products: [
                { type: "dessert", imgProduct: "assets/sobremesa1.jpg", nameProduct: "Mousse de Maracujá", descriptionProduct: "Compre um e peça outro, você vai querer", priceProduct: "4,90" },
                { type: "dessert", imgProduct: "assets/sobremesa2.jpg", nameProduct: "Gostosura de chocolate", descriptionProduct: "Compre uma e queira mais", priceProduct: "6,90" },
                { type: "dessert", imgProduct: "assets/sobremesa3.jpg", nameProduct: "Tortaça de limão", descriptionProduct: "Compre uma e leve outra pelo mesmo preço", priceProduct: "19,90" },
                { type: "dessert", imgProduct: "assets/sobremesa4.jpg", nameProduct: "Pudim", descriptionProduct: "Compre um e depois outro, você vai amar", priceProduct: "7,90" }
            ]
        }
    ];

    return (
        <main>
            <Menu menu={menu} count={count} setCount = {setCount}/>
            <Footer count={count} setCount = {setCount} />
        </main>
    );
}