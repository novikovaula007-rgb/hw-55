
import Burger from "./components/Burger/Burger.tsx";
import {useState} from "react";

function App() {
  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 2},
    {name: 'Cheese', count: 2}
  ]);
  return (
    <>
      <Burger ingredients={ingredients}/>
    </>
  )
}

export default App
