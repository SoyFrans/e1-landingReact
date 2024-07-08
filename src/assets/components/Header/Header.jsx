import { HeaderStyled, ListStyled, LogoStyled, HeaderBurger } from "./HeaderStyled.js"

function Header() {
    return (
            <HeaderStyled>
                <LogoStyled>
                    <a href="#">
                        <img src="https://img.freepik.com/vector-premium/tienda-juegos-concepto-logotipo-bolsa-icono-juego-o-logotipo-simbolo_144543-501.jpg"></img>
                    </a>
                </LogoStyled>
                <ListStyled>
                    <ul>
                        <li><a href="#">Comprar</a></li>
                        <li><a href="#">Sobre Nosotros</a></li>
                        <li><a href="#">Iniciar Sesión</a></li>
                    </ul>
                </ListStyled>
                <HeaderBurger>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                    <a href="#">
                        <span className="material-symbols-outlined">
                            menu
                        </span>
                    </a>
                </HeaderBurger>
            </HeaderStyled>
    )
}

export default Header
