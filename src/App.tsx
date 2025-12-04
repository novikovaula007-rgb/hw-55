import Burger from "./components/Burger/Burger.tsx";
import {useState} from "react";
import IngredientComponent from "./components/IngredientComponent/IngredientComponent.tsx";
import {INGREDIENTS} from "./globalConstants.ts";
import './App.css';
import type {TypeIngredient, IngredientBurger} from "./types";
import TotalPrice from "./components/TotalPrice/TotalPrice.tsx";

const initialPrice = 30;
const initialIngredients: IngredientBurger[] = INGREDIENTS.map(ingredient => {
  return {name: ingredient.name, count: 0};
});

function App() {
  const [ingredients, setIngredients] = useState<IngredientBurger[]>(initialIngredients);
  const [totalPrice, setTotalPrice] = useState(initialPrice);

  const getIngredient = (ingredientName: TypeIngredient) => {
    return ingredients.findIndex(ingredient => ingredient.name === ingredientName);
  }

  const updateIngredient = (ingredientName: TypeIngredient, price: number, updateCount: number) => {
    const ingredientIndex = getIngredient(ingredientName);

    const newIngredients = ingredients.map((ingredient, index) => {
      if (index === ingredientIndex) {
        return {...ingredient, count: ingredient.count + updateCount};
      } else {
        return ingredient;
      }
    });

    setIngredients(newIngredients);
    setTotalPrice(prevTotalPrice => prevTotalPrice + price);
  }

  const addIngredient = (ingredientName: TypeIngredient, price: number) => {
    updateIngredient(ingredientName, price, 1);
  }

  const delIngredient = (ingredientName: TypeIngredient, price: number) => {
    if (ingredients[getIngredient(ingredientName)].count > 0) {
      updateIngredient(ingredientName, price * -1, -1);
    }
  }

  return (
    <>
      <div className='burgerPage'>
        <div className='ingredientsBlock'>
          {INGREDIENTS.map((ingredient, index) => {
            const ingredientCopy = ingredients[getIngredient(ingredient.name)];
            return <IngredientComponent key={index}
                                        name={ingredient.name}
                                        image={ingredient.image}
                                        count={ingredientCopy.count}
                                        add={() => addIngredient(ingredient.name, ingredient.price)}
                                        del={() => delIngredient(ingredient.name, ingredient.price)}
            />
          })}
        </div>
        <div className='burgerBlock'>
          <Burger ingredients={ingredients}/>
        </div>
        <TotalPrice price={totalPrice}/>
      </div>
    </>
  )
}

export default App
