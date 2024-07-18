import { ContactContainer, ContactForm, ContactInput, ContactText} from "./ContactStyle"
import { CardButton } from "../../ExternalComponents/ProductStyle"

function Contact() {
    return (
        <ContactContainer>
            <ContactForm>
                <ContactText>
                    <h2>¡Comunicate con nosotros en cualquier momento!</h2>
                    <p>Estamos aquí para ayudarte y responder cualquier pregunta que puedas tener. Ya sea que tengas consultas sobre nuestros productos, necesites asistencia con un pedido, o simplemente quieras compartir tus comentarios, no dudes en comunicarte con nosotros. Completa el formulario a continuación y te responderemos lo antes posible.</p>
                </ContactText>
                <form>
                    <ul>
                        <li>
                            <h4>Nombre:</h4>
                            <ContactInput type="text" placeholder="Nombre"/>
                        </li>
                        <li>
                            <h4>Apellido:</h4>
                            <ContactInput type="text" placeholder="Apellido"/>
                        </li>
                        <li>
                            <h4>Email:</h4>
                            <ContactInput type="email" placeholder="example@gameshop.com"/>
                        </li>
                        <li>
                            <h4>Asunto:</h4>
                            <ContactInput type="texto" placeholder="Asunto"/>
                        </li>
                    </ul>
                    <CardButton className="buttonForm" type="submit">Enviar</CardButton>
                </form>
                
            </ContactForm>
        </ContactContainer>
    )
}

export default Contact
