import styled from "styled-components";

export const ContactContainer = styled.div`
    background-image: url(https://i.blogs.es/7fdcb0/mwii-next-overview-004/1366_2000.jpeg);
    background-size: cover;
    background-position: center;
    height: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContactForm = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    width: 80%;
    height: auto;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    padding: 20px;
    ul {
        font-size: 18px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .buttonForm {
        margin: 15px;
    }
    @media(max-width: 400px) {
        border-radius: 0;
        width: 100%;
        height: 100%;
        margin: 0;
    }
`;

export const ContactText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 25px;
    text-align: center;
    padding: 20px;
    align-items: center;
    p {
        font-size: 18px;
        width: auto;
    }
    @media (max-width: 646px) {
        h2 {
            font-size: 25px;
        }
        p {
            font-size: 16px;
        }
    }
`;

export const ContactInput = styled.input`
    border: 1px solid black;
    border-radius: 10px;
    text-align: center;
    width: 500px;
    height: 30px;
    @media (max-width: 646px) {
        width: 250px;
    }
`;