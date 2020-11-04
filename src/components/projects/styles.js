import styled from "styled-components";
import {motion} from "framer-motion";

export const ProjectBox = styled(motion.button)`
    background-color: #fff;
    border-radius: 10px;

    margin: 10px;

    padding: 13px;
    filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.30));
    min-height: 129px;

    width: 75%;
    min-width: 250px;
    border-style: none;


    display: flex;
    flex-direction: column;
    align-items: baseline;
    text-align: left;
    h3 {
        
        font-size: 20px;
    }

    p {
        font-size: 13px;
        margin-top: 8px;
    }

    span {
        position: absolute;
        margin-top: 8px;
        font-size: 13px;
        bottom: 21;
        right: 21;
    }
    @media (min-width: 600px) {
        width: 45%;
    }
`;