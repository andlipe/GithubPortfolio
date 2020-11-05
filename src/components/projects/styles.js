import styled from "styled-components";
import {motion} from "framer-motion";

export const ProjectBox = styled(motion.button)`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    text-align: left;
    background-color: #fff;
    width: 80%;
    min-width: 250px;
    border-radius: 10px;
    margin: 10px;
    padding-bottom: 0;
    padding-right: 0;
    border-style: none;
    
    filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.30));
    .cardHeader{
        width: 88%;
        padding: 20px;
        border-bottom: 1px solid #F3F3F3;
        h3 {
        color: #004C83;
        font-size: 20px;
        display: block;
        }
    }

    p {
        font-size: 16px;
        margin-top: 8px;
        margin-left: 20px;
        margin-right: 20px;
    }
    .cardFooter {
        
        display: flex;
        justify-content:flex-end;
        width: 100%;
        border-top: 1px solid #F3F3F3;
        margin-top: 50px;
        span {
        font-size: 15px;
        bottom: 0;
        padding: 19px;

        right: 56;
    }
    a {
        z-index: 16;
        
        img {
        border-left:  1px solid #F3F3F3;
        padding: 11px;

        right: 0;
        bottom: 0;
        width: 30px;
        z-index: 11;
            }
        }
    }
    @media (min-width: 600px) {
        .cardHeader{
            width: 90%;
    }
        width: 70%;
}
    @media (min-width: 1024px) {
        .cardHeader{
            width: 94.5%;
    }
        width: 52%;
    }
`;