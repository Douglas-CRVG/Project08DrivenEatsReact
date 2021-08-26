import MenuFood from './MenuFood'
import MenuDrink from './MenuDrink'
import MenuDessert from './MenuDessert'

export default function Main() {
    return (
        <main className="conteiner">
            <p className="top-scroll margem-esq">Primeiro, seu prato</p>
            <MenuFood />            
            <p className="top-scroll margem-esq">Agora, sua bebida</p>
            <MenuDrink />
            <p className="top-scroll margem-esq">Por fim, sua sobremesa</p>
            <MenuDessert />
        </main>
    );
}