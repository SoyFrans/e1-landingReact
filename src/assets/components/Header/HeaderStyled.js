import styled from "styled-components";

export const HeaderBurger = styled.div`
    display: none;
    @media (max-width: 660px) {
        display: flex;
        .material-symbols-outlined {
            font-size: 55px;
            color: black;
        }
    }
`;

export const HeaderStyled = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
`;

export const LogoStyled = styled.div`
    img {
        width: 200px;
        height: 200px;
    };
`;

export const ListStyled = styled.div`
    ul {
        display: flex;
        align-items: center;
        gap: 20px;
    };
    a {
        text-decoration: none;
        color: black;
        font-weight: 600;
    };
    @media (max-width: 660px) {
        display: none;
    }
`;