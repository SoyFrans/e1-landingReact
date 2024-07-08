import styled from "styled-components"

export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    height: auto;
    background-color: black;
    padding: 40px;
`;

export const AboutContText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    padding: 40px;
    background-color: grey;
    border-radius: 20px;
    img {
        width: 120px;
        height: auto;
    }
`;

export const AboutText = styled.div`
    color: white;
    font-size: 30px;
    text-align: center;
    h4 {
        font-size: 45px;
        color: red;
    }
    @media (max-width: 884px) { 
        font-size: 25px;
        h4 {
            font-size: 30px;
        }
    }
    @media (max-width: 616px) { 
        font-size: 19px;
        h4 {
            display: none;
        }
    }
`;