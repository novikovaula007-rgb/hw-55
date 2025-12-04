import './Burger.css'

interface Ingredient {
    name: string;
    count: number;
}

interface Props {
    ingredients: Ingredient[]
}

type TypeIngredient = 'Meat' | 'Cheese' | 'Bacon' | 'Salad'

const Burger: React.FC<Props> = ({ingredients}) => {
    const IngredientsArray: TypeIngredient[] = ingredients.reduce((acc: TypeIngredient[], ingredient) => {
        const newIngredients: TypeIngredient[] = Array(ingredient.count).fill(ingredient.name)
        return acc.concat(newIngredients)
    }, [])

    return (
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {IngredientsArray.map((ingredient, index) => {
                return <div key={index} className={ingredient}/>
            })}
            <div className="BreadBottom"></div>
        </div>
    );
};

export default Burger;