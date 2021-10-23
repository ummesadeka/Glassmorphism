import React from 'react';
import character from '../../../images/character.png';
import './ImageBox.css'


const ImageBox = () => {
    return (
        <div className="imgBox">
            <img src={character} alt="" />
        </div>
    );
};

export default ImageBox;