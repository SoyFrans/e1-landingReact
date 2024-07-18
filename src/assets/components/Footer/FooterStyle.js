import styled from "styled-components"

export const FooterContainer = styled.div`
    color: white;
    text-align: center;
    width: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    gap: 20px;
`;

export const FooterTxt = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    font-size: 45px;
    font-weight: bold;
`;

export const FooterImg = styled.div`
    img {
        width: 90pt;
        height: auto;
    }
`;

export const FooterFollow = styled.div`
    display: flex;
    flex-direction: column;
    h4 {
        font-size: 17px;
        color: grey;
    }
    ul {
        display: flex;
        gap: 10px;
    }
`;