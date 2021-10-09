import React from 'react';
import character from '../../../images/character.png';


const ImageBox = () => {
    return (
        <div className="imgBox">
            <img src={character} alt="" />
        </div>
    );
};

export default ImageBox;