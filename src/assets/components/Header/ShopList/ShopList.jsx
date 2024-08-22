import { ShopContainer, OpenContainer } from "./ShopStyled";
import { useContext } from "react"
import { ShopContext } from "./functionshoplist";
import CardShop from "./CardShopList";
import { products } from "../../ExternalComponents/Data/AllProducts";

function ShopList() {
    const { shopMenu, shopOpen } = useContext(ShopContext);
    return (
            <OpenContainer>
                <ShopContainer className={`Shop${shopOpen?'.active':''}`}> 
                    <h2>Tus juegos</h2>
                    <CardShop 
                    key={products.find(p => p.id === 1).id} 
                    name={products.find(p => p.id === 1).name} 
                    price={products.find(p => p.id === 1).price}
                    img={products.find(p => p.id === 1).img}
                    />
                    <div>
                        Total de tu compra: ${products.find(p => p.id === 1).price}
                    </div>
                    <button onClick={shopMenu}>
                        Terminar compra
                    </button>
                    <button onClick={shopMenu}>
                        Limpiar carrito
                    </button>
                </ShopContainer>
            </OpenContainer>
    )    
};
export default ShopList
