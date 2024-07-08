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