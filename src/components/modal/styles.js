import styled from "styled-components";
import { motion } from "framer-motion";


export const ModalDiv = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    z-index: 12;

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

    padding: 20px;    
    
    button {
        position: absolute;
        right: 25;
        top: 20;
        width: 40px;
        height: 40px;
        border-style: none;
        border-radius: 50%;
        font-size: 20px;
        background-color: inherit;
    }

    img {
        width: 280px;
    }

    li{
        list-style: none;
    }
`;