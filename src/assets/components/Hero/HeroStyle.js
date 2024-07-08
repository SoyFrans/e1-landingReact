import styled from "styled-components";

export const HeroContainer = styled.div`
    background-color: black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    img {
        width: 470pt;
        height: auto;
    }
    @media (max-width: 675px) {
        img {
            width: 240pt;
        }
    }
`;

export const HeroText = styled.div`
    width: 600px;
    h1 {
        font-size: 100px;
        background: linear-gradient(to bottom, yellow, orange, #e65100);
        background-clip: text;
        color: transparent;
    }
    @media (max-width: 675px) {
        h1 {
            font-size: 45px;
            text-align: center;
        }
    }
`;