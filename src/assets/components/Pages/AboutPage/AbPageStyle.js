import styled from "styled-components";

export const AboutContainer = styled.div`
    background-image: url(https://i.blogs.es/b71eb5/spider-man_ps4_air/650_1200.webp);
    height: 100%;
    background-size: cover;
    display: flex;
    justify-content: center;
`;

export const AboutUs = styled.div`
    width: 80%;
    height: auto;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px;
    padding: 40px;
    gap: 30px;
    @media(max-width: 400px) {
        border-radius: 0;
        width: 100%;
        height: 100%;
        margin: 0;
    }
`;

export const AboutImg = styled.img`
    width: 400px;
    height: 300px;
    @media (max-width: 730px) {
        width: 300px;
        height: 200px;
    }
`;

export const AboutTxt = styled.div`
    width: 90%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    @media (max-width: 730px) {
        font-size: 21px;
    }
`;