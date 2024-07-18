import { ProdContainer, ProdTitle, ProdButtons, ProdButton } from "./ProdPageStyle.js"
import { ProductsContainer } from "../../Productos/ProdStyle"
import { products } from "../../ExternalComponents/AllProducts/AllProducts.js"
import CardProduct from "../../ExternalComponents/CardProduct.jsx"
function ProdPage() {
    return (
        <ProdContainer>
            <ProdTitle>
                <h2>Los mejores juegos, al mejor precio.</h2>
                <ProdButtons>
                    <ProdButton>PlaySation</ProdButton>
                    <ProdButton>Xbox</ProdButton>
                    <ProdButton>Nintendo Switch</ProdButton>
                    <ProdButton>Retro</ProdButton>
                    <ProdButton>Más vendidos</ProdButton>
                    <ProdButton>Ofertas</ProdButton>
                </ProdButtons>
            </ProdTitle>
            <ProductsContainer>
                {products.map((prod)=> (
                <CardProduct key={prod.id} name={prod.name} price={prod.price} img={prod.img}/>
                ))}
            </ProductsContainer>
        </ProdContainer>
        
    )
}
export default ProdPage
