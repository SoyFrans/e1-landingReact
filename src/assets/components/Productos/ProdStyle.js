import styled from "styled-components"; 

export const TitleProduct = styled.div`
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 55px;
    margin: 40px;
    @media (max-width: 994px) {
        font-size: 35px;
        text-align: center;
    }
`;

export const ProductsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin: 30px;
`;
