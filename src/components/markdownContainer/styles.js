import styled from "styled-components";

export const MarkdownDiv = styled.div`
    background-color: #fff;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    width: 100%;    
    filter: drop-shadow(0px 0.970487px 3.88195px rgba(0, 0, 0, 0.25));
   

    .div_markdown {
        width: 70%;
        margin-top: 80px;
        margin-bottom: 10px;
        margin-right: 24px;
        margin-left: 24px;
    }
    
    h3 {
        font-size: 14px;
        margin-bottom: 13px;
        margin-top: 30px;

    }

    h2 {
        font-size: 16px;
        border-bottom: #C5C5C5 solid 1px;
        margin-bottom: 20px;
        padding-bottom: 20px;
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
        width: 70%;
        min-height: 600px;
        
    }
    @media (min-width: 1024px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        
        width: 60%;
        min-height: 750px;
        transform: translateY(-10%);
        .div_markdown {
        margin: 50px;
        }

        h3 {
        font-size:26px;
        margin-top:60px;
        }
        
        ul ~ h3 {
            font-size: 20px;
        }

        h2 {
            font-size: 22px;
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
                width: 40px;
                margin-right: 20px;
                margin-bottom:0;
                } 
            }
        }
        img {
            width: 50px;
            margin-right: 10px;
            margin-bottom: 12px;
        }
    }
`