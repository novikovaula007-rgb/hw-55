import meatImage from '../src/assets/meat.png';
import saladImage from '../src/assets/salad.png';
import cheeseImage from '../src/assets/cheese.png';
import bcnImage from '../src/assets/bcn.png';
import type {Ingredient} from "./types";

export const INGREDIENTS: Ingredient[] = [
    {name: 'Meat', price: 50, image: meatImage},
    {name: 'Salad', price: 50, image: saladImage},
    {name: 'Cheese', price: 50, image: cheeseImage},
    {name: 'Bacon', price: 50, image: bcnImage}
]