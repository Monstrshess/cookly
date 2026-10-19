import type {IngredientInDTO, IngredientOutDTO} from "./ingredient.repo";

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

export interface RecipeRepository {  // TODO: Implement this
    addIngredient(inDTO: IngredientInDTO): Promise<IngredientOutDTO>;
    getIngredient(id: number): Promise<IngredientOutDTO>;
    getRecipesByNameSuggestion(partOfName: string): Promise<RecipeOutDTO>[];
    updateIngredient(id: number, inDTO: Partial<IngredientOutDTO>): Promise<IngredientOutDTO>;
    deleteIngredient(id: number): Promise<void>;
}