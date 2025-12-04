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
    return ingredients.findIndex(ingredient => ingredient.name === ingredientName)
  }

  const updateIngredient = (ingredientName: TypeIngredient, price: number, updateCount: number) => {
    const ingredientIndex = getIngredient(ingredientName)

    setIngredients(ingredients.map((ingredient, index) => {
      if (index === ingredientIndex) {
        return {...ingredient, count: ingredient.count + updateCount}
      } else {
        return ingredient
      }
    }))

    setTotalPrice(prevTotalPrice => prevTotalPrice + price)
  }

  const addIngredient = (ingredientName: TypeIngredient, price: number) => {
    updateIngredient(ingredientName, price, 1)
  }

  const delIngredient = (ingredientName: TypeIngredient, price: number) => {
    if (ingredients[getIngredient(ingredientName)].count > 0) {
      updateIngredient(ingredientName, price * -1, -1)
    }
  }

  return (
    <>
      <div className='BurgerPage'>
        <div className='IngredientsBlock'>
          {INGREDIENTS.map((ingredient, index) => {
            const ingredientCopy = ingredients[getIngredient(ingredient.name)]
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
