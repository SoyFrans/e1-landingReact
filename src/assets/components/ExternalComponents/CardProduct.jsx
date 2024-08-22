import {CardContainer, CardTxt, CardStock, CardButton, CardImg} from "./ProductStyle"
function CardProduct( { name, price, img } ) {
    return (
        <CardContainer>
            <CardImg src={img} alt={name}/>
            <CardTxt className='card-container-description'>
                <CardButton>Comprar</CardButton>
                <h3 className='card-title'>{name}</h3>
                <span>$ {price}</span>
            </CardTxt>
            <CardStock>
                <h3>Stock</h3>
                <span>Disponible</span>
            </CardStock>
        </CardContainer>
    )
}
export default CardProduct