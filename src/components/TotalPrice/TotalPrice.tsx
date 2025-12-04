import React from 'react';
import './TotalPrice.css';

interface Props {
    price: number;
}

const TotalPrice: React.FC<Props> = ({price}) => {
    return (
        <div className='priceBlock'>total: {price}</div>
    );
};

export default TotalPrice;