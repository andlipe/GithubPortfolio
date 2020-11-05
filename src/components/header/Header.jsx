import React from 'react';
import { BackgroundBlue } from './styles';

const Header = (props) => {
    return (
        <BackgroundBlue>
        <div className="profile_photo">
            <img src={props.photoUrl} alt="Github Avatar"/>
        </div>
      </BackgroundBlue>  
    );
}

export default Header;
