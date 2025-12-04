import React from 'react';
import './ButtonDel.css';

interface Props {
    del: React.MouseEventHandler
}

const ButtonDel: React.FC<Props> = ({del}) => {
    return (
            <button type="button" onClick={del} className='buttonDel'></button>
    );
};

export default ButtonDel;