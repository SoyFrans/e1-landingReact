import styled from "styled-components"

export const CardContainer = styled.div`
    width: 400px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    div img {
        width: 200pt;
        height: 255pt;
    }
`;

export const CardTxt = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    .card-button {
        box-shadow: 0px 10px 14px -7px #54a3f7;
	    background:linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);
	    background-color:#007dc1;
	    border-radius:8px;
        border: none;
	    display:inline-block;
	    cursor:pointer;
	    color:#ffffff;
	    font-size:17px;
	    font-weight:bold;
	    padding:13px 32px;
	    text-decoration:none;
	    text-shadow:0px 1px 0px #154682;
    }
    .card-button:hover {
	    background:linear-gradient(to bottom, #0061a7 5%, #007dc1 100%);
	    background-color:#0061a7;
    }
    .card-button:active {
	    position:relative;
	    top: 1px;
    }
    span {
        font-size: 23px;
        font-weight: bold;
        color: grey;
    }
`;

export const CardStock = styled.div`
    h3 {
        font-size: 25px;
    }
    span {
        color: green;
    }
    width: 100%;
    background-color: lightgray;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
`;

