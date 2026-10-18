import type {DefaultEntityRepository} from "../abstractions/crud.repository";
import type {IngredientOutDTO} from "./ingredient.repo";

type RecipeIngredientOutDTO = {
    ingredient: IngredientOutDTO;
    amountGr: number;
    customAmount: number|null;
    customUnit: string|null;
}

type RecipeIngredientInDTO = {
    ingredientId: number;
    amountGr: number;
    customAmount: number|null;
    customUnit: string | null;
}

export type RecipeOutDTO = {
    id: number;
    name: string;
    description: string;
    ingredients: RecipeIngredientOutDTO[];
}

export type RecipeInDTO = {
    name: string;
    description: string;
    ingredients: RecipeIngredientInDTO[];
}

export interface RecipeRepository extends DefaultEntityRepository<RecipeOutDTO, RecipeInDTO> { // TODO: Implement this
    getRecipesByNameSuggestion(partOfName: string): Promise<RecipeOutDTO>[];
}