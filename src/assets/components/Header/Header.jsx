import { HeaderStyled, ListStyled, LogoStyled, HeaderBurger, HeaderFind, InputIcon, HeaderFinder } from "./HeaderStyled.js"
import { Outlet, Link } from "react-router-dom"
import NavList from "./NavList.jsx"
import { useContext } from "react"
import { BurgerContext } from "./MenuBurger/functionburger"
import { ShopContext } from "./ShopList/functionshoplist.jsx"

function Header() {
    const {toggleMenu} = useContext(BurgerContext);
    const {shopMenu} = useContext(ShopContext);
    return (
        <HeaderStyled>
            <HeaderBurger>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"/>
                <button onClick={toggleMenu}>
                    <span className="material-symbols-outlined">menu</span>
                </button> 
            </HeaderBurger>
                <Link to="Home">
                    <LogoStyled src="/86-02.png"></LogoStyled>
                </Link>
            <HeaderFinder>
                <HeaderFind id="find" type="text" placeholder="¿Que estás buscando?"/> 
                <InputIcon width="25" height="25" src="https://img.icons8.com/ios-filled/50/search--v1.png" alt="search--v1"></InputIcon>
            </HeaderFinder>
            <ListStyled>
                <NavList/>
                <button onClick={shopMenu}>
                    <span className="material-symbols-outlined">shopping_cart</span>
                </button>
            </ListStyled>
            <Outlet/>
        </HeaderStyled>  
    )
}

export default Header
