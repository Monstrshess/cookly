import type {DefaultEntityRepository} from "../abstractions/crud.repository";

export type IngredientOutDTO = {
    id: number;
    name: string;
    calories: number|null;
    proteins: number|null;
    fats: number|null;
    carbohydrates: number|null;
}
export type IngredientInDTO = {
    name: string;
    calories?: number|null;
    proteins?: number|null;
    fats?: number|null;
    carbohydrates?: number|null;
}


export interface IngredientRepository extends DefaultEntityRepository<IngredientInDTO, IngredientOutDTO> { // TODO: Implement this
    getIngredientByNameSuggestion(partOfName: string): Promise<IngredientOutDTO>;
}
