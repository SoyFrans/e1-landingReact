import styled from "styled-components";

export const ProdContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
`;

export const ProdTitle = styled.div`
    background-image: url(https://img.freepik.com/vector-gratis/fondo-abstracto-lluvia-pixeles_23-2148383734.jpg?size=626&ext=jpg&ga=GA1.1.1788614524.1718064000&semt=ais_user);
    background-size: cover;
    width: auto;
    font-size: 34px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: black;
    color: white;
    @media(max-width: 880px) {
        h2 {
            font-size: 35px;
        }
    }
`;

export const ProdButtons = styled.div`
    width: auto;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const ProdButton = styled.button`
    font-weight: bold;
    box-shadow:inset 0px -3px 7px 0px #29bbff;
	background:linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
	background-color: #2dabf9;
    border: none;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:16px;
	padding: 9px 23px;
`;



