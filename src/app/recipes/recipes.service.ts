import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://images.ctfassets.net/lufu0clouua1/OkbIf0HwNbrXO0KDQFeYF/9444d480af8dd574787cab0dac6b8a72/LBM_SCHNITZEL_01_19_2214057.jpg',
      ingridients: [
        'French Fries', 'Pork Meat', 'Salad'
      ]
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/ee869d9b-c90f-459d-b7e3-69ab3df03256.jpg',
      ingridients: [
        'Spaghetti', 'Meat', 'Tomatoes'
      ]
    }
  ];

  constructor() { }

  getAllRecipes(): Recipe[] {
    return [...this.recipes];
  }

  getRecipebyId(id: string | null): Recipe | undefined {
    return {...this.recipes.find(recipe => recipe.id === id)} as Recipe;
  }

  deleteRecipeById(id: string) {
    this.recipes = [...this.recipes.filter(recipe => recipe.id !== id)];
  }
}
