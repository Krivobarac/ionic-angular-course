import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  recipe?: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipesService,
    private router: Router,
    private alertControler: AlertController
  ) { }

  ngOnInit() {
    this.getRecipe();
  }

  getRecipe() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('recipeId');
      this.recipe = this.recipeService.getRecipebyId(recipeId);
      !this.recipe?.id && alert(4);
    });
  }

  deleteRecipe() {
    this.alertControler.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the recipe?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            if (this.recipe) 
              this.recipeService.deleteRecipeById(this.recipe.id);
            this.router.navigate(['/recipes']);
          }
        },
      ]
    }).then(alertEl => alertEl.present());
  }

}
