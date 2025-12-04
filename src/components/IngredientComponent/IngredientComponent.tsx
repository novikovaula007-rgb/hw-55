import React, {type MouseEventHandler} from 'react';
import ButtonAdd from "./ButtonAdd/ButtonAdd.tsx";
import ButtonDel from "./ButtonDel/ButtonDel.tsx"
import './IngredientComponent.css'

interface Props {
    name: string;
    image: string;
    count: number;
    add: MouseEventHandler;
    del: MouseEventHandler;
}

const IngredientComponent: React.FC<Props> = ({name, image, count, add, del}) => {
    return (
        <div className='ingredientBlock'>
            <ButtonAdd add={add} image={image} name={name}/>
            <div className=''></div>
            <div className='countWrapper'>
                <span>{count}</span>
                <ButtonDel del={del}/>
            </div>
        </div>
    );
};

export default IngredientComponent;