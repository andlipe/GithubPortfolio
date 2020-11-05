import styled from "styled-components";
import Background from '../../assets/Background.svg'

export const BackgroundBlue = styled.div`
    background-color: #004C83;
    width: 100%;
    min-height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: url(${Background}) no-repeat center;
    .profile_photo {
        display: flex;
        justify-content: center;
        
        img {
            transform: translateY(20%);
            max-height: 158px;
            position: absolute;
            top: 25px;
            z-index: 11;
            border: #fff solid 5px;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            border-radius:  50%;
            margin-bottom: 20px;
        }
    }

   
    h1 {
        color: #fff;
        transform: translateY(50%);
    }

    @media (min-width: 500px) {
        min-height: 220px;
        .profile_photo {
        img {
            transform: translateY(34%);
            max-height: 200px;
        }
    }
    }
    @media (min-width: 1024px) {
        
        min-height: 300px;
        .profile_photo {
        img {
            transform: translateY(35%);
            max-height: 200px;
        }
    }
    }
`;
