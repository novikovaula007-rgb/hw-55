
import Burger from "./components/Burger/Burger.tsx";
import {useState} from "react";
import IngredientComponent from "./components/IngredientComponent/IngredientComponent.tsx";
import {INGREDIENTS} from "./globalConstants.ts";

function App() {
  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 2},
    {name: 'Cheese', count: 2}
  ]);
  return (
    <>
      <div className='BurgerPage'>
        <div className='IngredientsBlock'>
          {INGREDIENTS.map((ingredient, index) => {
            return <IngredientComponent key={index} name={ingredient.name} image={ingredient.image}/>
          })}
        </div>
        <div className='BurgerBlock'>
          <Burger ingredients={ingredients}/>
        </div>
      </div>
    </>
  )
}

export default App
