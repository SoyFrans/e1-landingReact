import {ProductsContainer,TitleProduct } from "./ProdStyle"
import CardProduct from "../ExternalComponents/CardProduct"
import { products } from "../ExternalComponents/AllProducts/AllProducts"

function Productos() {
    return (
        <div>
            <TitleProduct> 👾 Nuestros Juegos 👾 </TitleProduct>
                <ProductsContainer>
                        {products.map((prod)=> (
                        <CardProduct key={prod.id} name={prod.name} price={prod.price} img={prod.img}/>
                        ))}
                </ProductsContainer> 
        </div>
    )
}
export default Productos
