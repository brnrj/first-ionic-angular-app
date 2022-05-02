import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.page.html',
  styleUrls: ['./add-recipe.page.scss'],
})
export class AddRecipePage implements OnInit {
  recipe: Recipe = { id: '', title: '', img: '', ingredients: [] };

  constructor(
    public recipesService: RecipesService,
    public router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  recipesIngredients(event) {
    this.recipe.ingredients = event;
  }

  ingredientsSplit(ingredients: string): string[] {
    return ingredients.split(',');
  }

  addNewRecipe() {
    console.log(this.recipe);
  }
  onSubmit(form: NgForm) {
    if (!form.value.title || !form.value.img || !form.value.ingredients) {
      this.alertCtrl
        .create({
          header: 'Campos inválidos!',
          message: 'Preencha os campos corretamente, nenhum campo pode estar vazio.',
          buttons: ['OK!'],
        })
        .then((alertEl) => {
          alertEl.present();
        });
      return;
    }
    const index = this.recipesService.getAllRecipes().length;
    const newRecipe = {
      id: 'r' + String(index + 1),
      title: form.value.title,
      img: form.value.img,
      ingredients: this.ingredientsSplit(form.value.ingredients).map((e) =>
        e.trim()
      ),
    };
    this.recipesService.addRecipe(newRecipe);
    this.router.navigate(['/recipes']);
  }
}
