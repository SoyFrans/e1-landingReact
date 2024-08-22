import styled from "styled-components";

export const ShopContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    width: 20%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 10;
    background-color: #333; 
    button {
        margin: 25px;
        cursor: pointer;
        box-shadow:inset 0px 1px 0px 0px #ffffff;
	    background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
	    background-color:#ffffff;
	    border-radius:6px;
	    border:1px solid #dcdcdc;
	    display:inline-block;
	    color:#666666;
	    font-weight:bold;
	    padding:6px 24px;
	    text-shadow:0px 1px 0px #ffffff;
    }
`;

export const OpenContainer = styled.div`
    .Shop {
        display: none;
    }
    .Shop.active {
        display: block;
    }
`;