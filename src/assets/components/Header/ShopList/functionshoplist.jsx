import { createContext, useState } from "react"

export const ShopContext = createContext();

const MenuShopProvider = ({children}) => {

    const [shopOpen, setShopOpen] = useState(false);

    const shopMenu = () => {
        setShopOpen(!shopOpen);
    };

    return (
        <ShopContext.Provider value={{ shopOpen, shopMenu }}>
            {children}
        </ShopContext.Provider>
    )
}

export default MenuShopProvider;