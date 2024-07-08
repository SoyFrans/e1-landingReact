import {CardContainer, CardTxt, CardStock} from "./ProductStyle"

function CardProduct({ cardImg, cardTitle, cardButton, cardPrice }) {
    return (
        <CardContainer>
            <div>
                <img className='card-img' src={cardImg} alt="card-img"/>
            </div>
           
            <CardTxt className='card-container-description'>
                <button className='card-button'>{cardButton}</button>
                <h3 className='card-title'>{cardTitle}</h3>
                <span>$ {cardPrice}</span>
            </CardTxt>
            <CardStock>
                <h3>Stock</h3>
                <span>Disponible</span>
            </CardStock>
        </CardContainer>
    )
}
export default CardProduct