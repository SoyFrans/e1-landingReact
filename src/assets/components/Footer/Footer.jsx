import {FooterContainer, FooterTxt, FooterImg, FooterFollow} from "./FooterStyle"

function Footer() {
    return (
        <FooterContainer>  
            <FooterFollow>
                <h4>Seguinos en nuestras redes</h4>
                <ul>
                    <li><a href="#"><img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/></a></li>
                    <li><a href="#"><img width="48" height="48" src="https://img.icons8.com/fluency/48/facebook.png" alt="facebook"/></a></li>
                    <li><a href="#"><img width="48" height="48" src="https://img.icons8.com/fluency/48/twitch.png" alt="twitch"/></a></li>
                    <li><a href="#"><img width="48" height="48" src="https://img.icons8.com/fluency/48/discord-logo.png" alt="discord-logo"/></a></li>
                    <li><a href="#"><img width="48" height="48" src="https://img.icons8.com/fluency/48/tiktok.png" alt="tiktok"/></a></li>
                </ul>
            </FooterFollow>
            <FooterImg>
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80e19859-e026-4a30-a9fe-0a16d9cb41bb/dfkyhpk-4da51d29-5baa-40c2-9499-ead53cdc8262.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgwZTE5ODU5LWUwMjYtNGEzMC1hOWZlLTBhMTZkOWNiNDFiYlwvZGZreWhway00ZGE1MWQyOS01YmFhLTQwYzItOTQ5OS1lYWQ1M2NkYzgyNjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lSNRR5CVd2m4BCcQskTc2dUWWk99Od5V5WKNQwGIAm8"></img>
            </FooterImg>
            <FooterTxt>
                ¡Gracias por elegirnos!
            </FooterTxt>
            <h4>Game Shop ©</h4>
        </FooterContainer>
    )
}

export default Footer
