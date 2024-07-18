import { AboutContainer, AboutTxt, AboutUs, AboutImg } from "./AbPageStyle"

function AboutPage() {
    return (
        <AboutContainer>
            <AboutUs>
                <AboutImg src="/86-02.png"></AboutImg>
                <AboutTxt>
                    <p>Tu mejor opción para todo lo relacionado con videojuegos. Nos apasiona el mundo del gaming y nos dedicamos a ofrecerte una selección incomparable de juegos, consolas y accesorios. Ya sea que busques los últimos lanzamientos o los clásicos que definieron una era, en GAME-SHOP encontrarás todo lo que necesitas para disfrutar al máximo.</p>
                </AboutTxt>
            </AboutUs>
        </AboutContainer>
    )
}
export default AboutPage
