export type TypeIngredient = 'Meat' | 'Cheese' | 'Bacon' | 'Salad'

export interface IngredientInterface {
    name: TypeIngredient;
    price: number;
    image: string;
}

export interface IngredientBurger {
    name: TypeIngredient;
    count: number;
}