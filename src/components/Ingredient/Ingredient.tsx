import React, {type MouseEventHandler} from 'react';
import ButtonAdd from "./ButtonAdd/ButtonAdd.tsx";

interface Props {
    name: string;
    image: string;
    count: string;
    add: MouseEventHandler;
    del: MouseEventHandler;
}

const Ingredient: React.FC<Props> = ({name, image, count, add, del}) => {
    return (
        <div>
            <ButtonAdd add={add} image={image} name={name}/>
            <span>x{count}</span>
            <button onClick={del}>удалить</button>
        </div>
    );
};

export default Ingredient;