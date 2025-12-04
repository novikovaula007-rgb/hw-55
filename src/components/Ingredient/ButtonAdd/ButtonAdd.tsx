import React from 'react';

interface Props {
    name: string;
    image: string;
    add: React.MouseEventHandler
}

const ButtonAdd: React.FC<Props> = ({name, image, add}) => {
    return (
        <button type="button" onClick={add}>
            <img alt={name} src={image}/>
            <span>{name}</span>
        </button>
    );
};

export default ButtonAdd;