import { motion } from "framer-motion";
import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction:column;
    
    justify-content: center;
    align-items: center;
    background-color: #F3F3F3;
    width: 100%;
`;


export const BackgroundBlue = styled.div`
    background-color: #004C83;
    width: 100%;
    max-height: 320px;
    min-height: 208px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .profile_photo {
        display: flex;
        justify-content: center;
        img {
            max-height: 158px;
            position: absolute;
            top: 25px;
            z-index: 11;

            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

            border-radius:  50%;
            margin-bottom: 20px;
        }
    }

   
    h1 {
        color: #fff;
    }

    @media (min-width: 600px) {
        .profile_photo {
        img {
            max-height: 200px;
        }
    }
    }
`;

export const ProjectList = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `

export const MarkdownContainer = styled.div`
    
    background-color: #fff;
    
    display: flex;

    border-radius: 10px;
    width: 80%;    
    transform: translateY(40%);
    .div_markdown {
        margin-top: 85px;
        margin-bottom: 10px;
        margin-right: 24px;
        margin-left: 24px;
    }
    
    h3 {
        font-size: 14px;
        margin-bottom: 13px;
        margin-top: 10px;

    }

    h2 {
        font-size: 16px;
    }

    ul {
        padding-inline-start: 0;
        li {
            font-size: 14px;
            list-style: none;
            margin-bottom: 11px;
        }
    }

    p {
        a {
            img {
            margin-right: 18px;
            margin-bottom:0;
            } 
        }
    }
    img {
        width: 22px;
        margin-right: 10px;
        margin-bottom: 12px;
    }
    @media (min-width: 600px) {
        width: 80%;
        min-height: 600px;
        
    }
    @media (min-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        
        width: 50%;
        min-height: 750px;
        transform: translateY(50%);
        
        .div_markdown {
        margin: 50px;
        }
        h3 {
        font-size:28px;
        margin-top:50px;
        }

        h2 {
            font-size: 26px;
        }

        ul {

            li {
                font-size: 22px;
                list-style: none;
                margin-bottom: 15px;
            }
        }

        p {
            a {
                img {
                width: 60px;
                margin-right: 20px;
                margin-bottom:0;
                } 
            }
        }
        img {
            width: 60px;
            margin-right: 10px;
            margin-bottom: 12px;
        }
    }
`

export const EmptyDiv = styled.div`

    height: 300px;
    width: 100%;
    clear: both;

@media (max-width: 330px ) {
    height: 350px;
}

@media (min-width: 600px ) {
    height: 350px;
}
@media (min-width: 1024px ) {
    height: 550px;
}
`
export const BlueEmptyDiv = styled(EmptyDiv)`
    height: 100px;
    background-color: #004C83;
`

export const Next  = styled.div`
position: absolute;
background: white;
border-radius: 30px;
width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
user-select: none;
cursor: pointer;
font-weight: bold;
font-size: 18px;
z-index: 2;

right: 0;
@media(min-width: 600px) {
    right: 24%;
}
`
export const Prev = styled(Next)`
left: 0;
@media(min-width: 600px) {
    left: 24%;
}

`