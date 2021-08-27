import Product from "../others/Product";

export default function Menu(props) {
    const {menu} = props;

    return (
        <div className="scroll">
            {menu.map((categorie, index) =>{
                const {
                    title,
                    products
                } = categorie;

                return (
                    <p key={index} className="top-scroll margem-esq">{categorie}</p>
                    {products.map((product, index) => <Product key={index} product={product} />)}
                )
            })}            
        </div>
    )
}