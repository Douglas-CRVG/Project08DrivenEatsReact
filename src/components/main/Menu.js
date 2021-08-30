import Product from "../others/Product";

export default function Menu(props) {

    const {menu, count, setCount} = props;

    return (
        <>
            {menu.map((categorie, index) =>{
                const {
                    title,
                    products
                } = categorie;

                return (
                    <div key={index}>
                        <div className="top-scroll margem-esq">{title}</div>
                        <div key={index} className="scroll">
                            {products.map((product, index) => <Product key={index} product={product} count={count} setCount = {setCount} />)}
                        </div>
                    </div>
                )
            })}            
        </>
    )
}