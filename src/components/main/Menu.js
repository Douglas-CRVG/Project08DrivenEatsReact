import Product from "../others/Product";

export default function Menu(props) {
    const {menu} = props;

    return (
        <>
            {menu.map((categorie, index) =>{
                const {
                    title,
                    products
                } = categorie;

                return (
                    <div key={index} className="scroll">
                        <div className="top-scroll margem-esq">{title}</div>
                        <div className = "conteiner">
                            {products.map((product, index) => <Product key={index} product={product} />)}
                        </div>
                    </div>
                )
            })}            
        </>
    )
}