import { Link } from "react-router-dom"
import { useContext } from "react"
import { BurgerContext } from "./MenuBurger/functionburger"

function NavList() {
    const {toggleMenu, isOpen} = useContext(BurgerContext);

    return (
        <ul className={`BurgerList${isOpen?'.active':''}`}>
            <li onClick={toggleMenu}><Link className="HeaderLink" to="Contact">Contactos</Link></li>
            <li onClick={toggleMenu}><Link className="HeaderLink" to="AboutPage">Sobre Nosotros</Link></li>
            <li onClick={toggleMenu}><Link className="HeaderLink" to="ProductsPage">Nuestros Productos</Link></li>
        </ul> 
    )
}
export default NavList
