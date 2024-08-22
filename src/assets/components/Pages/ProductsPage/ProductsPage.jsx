import { ProdContainer, ProdTitle, ProdButtons, ProdButton } from "./ProdPageStyle.js"
import { ProductsContainer } from "../../Productos/ProdStyle"
import { products } from "../../ExternalComponents/Data/AllProducts.js"
import CardProduct from "../../ExternalComponents/CardProduct.jsx"
import { categories } from "../../ExternalComponents/Data/Categories.js"
import { useState } from "react"

function ProdPage() {

    const [filterSelect, setFilterSelect] = useState({});

    const handleFilter = (console) => {
        setFilterSelect(prevFilterSelect => ({
            [console]: !prevFilterSelect[console]
        }));
    };
    
    const filteredProducts = products.filter(product => {
        return Object.entries(filterSelect).reduce((acc, [key, value]) => {
            if (value) {
                return acc && product.console === key;
            }
            return acc;
        }, true);
    });
    
    return (
        <ProdContainer>
            <ProdTitle>
                <h2>Los mejores juegos, al mejor precio.</h2>
                <ProdButtons>
                    {categories.map(categories=>(
                        <ProdButton
                        key={categories.id}
                        value={categories.name}
                        onClick={() => handleFilter(categories.name)}
                        >
                            {categories.name}
                        </ProdButton>
                    ))}
                </ProdButtons>
            </ProdTitle>
            <ProductsContainer>
               {filteredProducts.map((prod)=> (
                <CardProduct key={prod.id} name={prod.name} price={prod.price} img={prod.img}/>
                ))}
            </ProductsContainer>
        </ProdContainer>
    )
}
export default ProdPage
