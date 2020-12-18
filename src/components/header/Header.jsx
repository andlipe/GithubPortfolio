import React from 'react';
import { BackgroundBlue } from './styles';

const Header = (props) => {
    return (
        <BackgroundBlue>
        <div className="profile_photo">
            {props.photoUrl ?
                <img src={props.photoUrl} alt="Github Avatar"/>
                :
                <img />
            }

        </div>
      </BackgroundBlue>  
    );
}

export default Header;
