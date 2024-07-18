import { createContext, useState } from "react"

export const BurgerContext = createContext();

const MenuProvider = ({children}) => {
    
    const [isOpen, setisOpen] = useState(false);

    const toggleMenu = () => {
        setisOpen(!isOpen);
    }

    return (
        <BurgerContext.Provider value={{ isOpen, toggleMenu }}>
            {children}
        </BurgerContext.Provider>
    )
}

export default MenuProvider
