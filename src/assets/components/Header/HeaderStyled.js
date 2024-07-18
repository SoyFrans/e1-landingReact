import styled from "styled-components";

export const HeaderBurger = styled.div`
    display: none;
    @media (max-width: 1060px) {
        display: flex;
        button {
            background-color: transparent;
            border: none;
        }
        .material-symbols-outlined {
            font-size: 55px;
            color: black;
        }
    }
`;

export const HeaderStyled = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background-color: white;
`;

export const LogoStyled = styled.img`
    max-width: 180px;
    height: auto;
`;

export const HeaderFinder= styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const HeaderFind = styled.input`
    width: 500px;
    height: 50px;
    border: solid 3px;
    border-radius: 20px;
    text-align: center;
    @media (max-width: 500px) {
        width: 300px;
    }
`;

export const InputIcon = styled.img`
    position: absolute;
    margin: 10px;
`;

export const ListStyled = styled.div`
    ul {
        display: flex;
        align-items: center;
        gap: 20px;
    };
    .HeaderLink {
        color: black;
        font-weight: bold;
    }
    @media (max-width: 1060px) {
        display: none;
    }
`;