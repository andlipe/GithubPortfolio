import styled from "styled-components";
import Background from '../assets/Background.svg'


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
        margin-top: 0px;
        margin-left: 50px; 
        align-self: baseline;
    }

    @media(min-width: 600px) {
        .projectsH1 {
            align-self: center;
        }    
    }
`;


export const Footer = styled.div`
    clear: both;
    width: 100%;
    height: 50px;
    background-color: #004C83;
    background: url(${Background}) no-repeat center;

`


