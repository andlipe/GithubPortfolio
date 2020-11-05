import styled from "styled-components";
import { motion } from "framer-motion";


export const ModalDiv = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    z-index: 13;

    display: flex;
    align-items: center;
    justify-content: center;

`;

export const ModalCard = styled(motion.div)`
    overflow-y: auto;
    justify-content: center;
    background-color: #fff;
    width: 80%;
    height: 90%;

    border-radius: 10px;
    h1 {
        margin: 0;
        margin-bottom: 15px;
        color: #004C83;
    }
    padding: 20px;    
    
    button {
        position: relative;
        width: 40px;
        height: 40px;
        border-style: none;
        border-radius: 50%;
        font-size: 20px;
        background-color: inherit;
        right: -300;
        top: -10;
    }

    p{
        width: 95%;
        margin-top: 5px;
    }
    img {
        width: 95%;
    }

    li{
        list-style: none;
    }
    h4 {
        font-size: 18px;
        margin-top: 15px;
    }
    code {
        display: block;
        background-color: #c5c5c5;
    }
    @media(min-width: 600px) {
        text-align: left;
        width: 40%;
        padding-left: 25px;
        overflow-y: scroll;
        ::-webkit-scrollbar {
        display: none;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
        button{
            position: absolute;
            right: 100;
        }
        p{
            width: 95%;
        }
        h2 {
            margin-top: 20px;
        }
        h3 {
            margin-top: 15px;
        }
        img {
        width: 95%;
        }
        
    }
`;
