import meatImage from '../src/assets/meat.png';
import saladImage from '../src/assets/salad.png';
import cheeseImage from '../src/assets/cheese.png';
import bcnImage from '../src/assets/bcn.png';
import type {IngredientInterface} from "./types";

export const INGREDIENTS: IngredientInterface[] = [
    {name: 'Meat', price: 80, image: meatImage},
    {name: 'Salad', price: 10, image: saladImage},
    {name: 'Cheese', price: 50, image: cheeseImage},
    {name: 'Bacon', price: 60, image: bcnImage}
]