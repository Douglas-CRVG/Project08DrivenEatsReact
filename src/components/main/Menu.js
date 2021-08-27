import Product from "../others/Product";

export default function Menu(props) {
    console.log(props);
    const {menu} = props;
    console.log(menu)

    return (
        <div className="scroll">
            {menu.map((categorie, index) =>{
                const {
                    title,
                    products
                } = categorie;

                return (
                    <>
                        <p key={index} className="top-scroll margem-esq">{title}</p>
                        {products.map((product, index) => <Product key={index} product={product} />)}
                    </>
                )
            })}            
        </div>
    )
}