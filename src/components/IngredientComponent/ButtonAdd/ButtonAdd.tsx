import React from 'react';
import './ButtonAdd.css';

interface Props {
    name: string;
    image: string;
    add: React.MouseEventHandler;
}

const ButtonAdd: React.FC<Props> = ({name, image, add}) => {
    return (
        <div className='buttonWrapper'>
            <button type="button" onClick={add} className='buttonAdd'>
                <img alt={name} src={image} className='buttonImage'/>
            </button>
            <span>{name}</span>
        </div>
    );
};

export default ButtonAdd;