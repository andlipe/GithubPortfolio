import { motion } from "framer-motion";
import styled from "styled-components";

export const ProjectList = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0px;

`

export const Button = styled.button`
    font-size: 20px;
    border-style: none;
    margin-top: 10px;
    margin-bottom: 15px;
    padding: 10px;
    background-color: inherit;
    width: 80%;
    background-color: #004C83;
    border-radius: 9px;
    color: #fff;    
    box-shadow: 0 0.5px black;
    :hover{
        scale: 1.01;
    }
    :active {
        transform: translateY(4px);
    }
    @media(min-width: 600px) {
        width: 70%
    }
    @media(min-width: 1024px) {
        width: 52%
    }
`