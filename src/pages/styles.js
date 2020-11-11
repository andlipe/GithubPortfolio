import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    background-color: #F3F3F3;
    width: 100%;

    .projectsH1 {
        font-size: 25px;
        color: #004C83;
        margin: 15px;
        margin-top: 15px;
        margin-bottom: 5px;
        margin-left: 50px; 
        align-self: baseline;
    }

    @media(min-width: 600px) {
        .projectsH1 {
            margin: 15px;
            margin-top: 0px;
            align-self: center;
        }    
    }
`;


export const Footer = styled.div`
    clear: both;
    width: 100%;
    height: 50px;
    margin-top: 20px;
    background-color: #004C83;
    background: url("/assets/Background.svg") no-repeat center;

`


