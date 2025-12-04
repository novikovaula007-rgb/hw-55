
import Burger from "./components/Burger/Burger.tsx";
import {useState} from "react";
import IngredientComponent from "./components/IngredientComponent/IngredientComponent.tsx";
import {INGREDIENTS} from "./globalConstants.ts";
import type {TypeIngredient, IngredientBurger} from "./types";

function App() {
  const [ingredients, setIngredients] = useState<IngredientBurger[]>([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Bacon', count: 0},
    {name: 'Salad', count: 0}
  ]);

  const [totalPrice, setTotalPrice] = useState(30)

  const getIngredient = (ingredientName: TypeIngredient) => {
    const ingredientsIndex = ingredients.findIndex(ingredient => ingredient.name === ingredientName)
    return ingredients[ingredientsIndex]
  }

  const addIngredient = (ingredientName: TypeIngredient, price: number) => {
    const ingredientCopy = getIngredient(ingredientName)

    setTotalPrice(prevTotalPrice => prevTotalPrice + price)
    setIngredients([...ingredients, {...ingredientCopy, count: ingredientCopy.count + 1}])
  }

  const delIngredient = (ingredientName: TypeIngredient, price: number) => {
    const ingredientCopy = getIngredient(ingredientName)
    setTotalPrice(prevTotalPrice => prevTotalPrice + price)
    if (ingredientCopy.count > 0) {
      setIngredients([...ingredients, {...ingredientCopy, count: ingredientCopy.count - 1}])
    }
  }

  return (
    <>
      <div className='BurgerPage'>
        <div className='IngredientsBlock'>
          {INGREDIENTS.map((ingredient, index) => {
            const ingredientCopy = getIngredient(ingredient.name)
            return <IngredientComponent key={index}
                                        name={ingredient.name}
                                        image={ingredient.image}
                                        count={ingredientCopy.count}
                                        add={() => addIngredient(ingredient.name, ingredient.price)}
                                        del={() => delIngredient(ingredient.name, ingredient.price)}
            />
          })}
        </div>
        <div className='BurgerBlock'>
          <Burger ingredients={ingredients}/>
        </div>
        <span>total: {totalPrice}</span>
      </div>
    </>
  )
}

export default App
