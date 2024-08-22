import { ShopCardContainer } from "./CardShopStyle";

function CardShop({name, price, img}) {
    return (
        <>
            <ShopCardContainer>
                <ul>
                    <li>
                        <img width="200" height="200" src={img} placeholder={name}></img>
                    </li>
                    <li>{name}</li>
                    <li>$ {price}</li>
                </ul>
                <div>
                    <button>
                        Eliminar Prodcuto
                    </button>
                </div>
            </ShopCardContainer>
        </>
    )
}

export default CardShop
