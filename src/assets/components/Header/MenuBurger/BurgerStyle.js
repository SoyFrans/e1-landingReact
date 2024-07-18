import styled from "styled-components";

export const Burger = styled.div`
    display: none;
    flex-direction: column;
    @media (max-width: 1060px) {
        display: flex;
        position: absolute;
        align-items: center;
        background-color: lightgrey;
        img {
            margin: 20px;
        }
        li {
            width: 300px;
            height: 60px;
            padding: 20px;
            border-top: 1px solid black;
        }
        .HeaderLink {
            width: 100%;
            height: 80px;
            color: black;
            font-weight: bold;
        }
        .BurgerList {
            display: none;
        }
        .BurgerList.active {
            display: block
        }
    }
`;