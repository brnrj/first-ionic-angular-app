import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Caipirinha',
      img: 'https://img.estadao.com.br/fotos/crop/1200x1200/resources/jpg/9/3/1532640931039.jpg',
      ingredients: ['Limão', 'Açúcar', 'Gelo', 'Cachaça'],
    },
    {
      id: 'r2',
      title: 'Gin com tônica',
      img:
        'https://s2.glbimg.com/nWYVYEO7MVp7oOOT7fuTIFtujpo=/0x0:626x938/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/' +
        'AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/5/Y/t9vMasReyP8U2rvSG4Yw/gin-de-limao.jpg',
      ingredients: ['Gin', 'Gelo', 'Slice de limão', 'Zimbro', 'Alecrim'],
    },
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipes(recipeId: string) {
    return { ...this.recipes.find((e) => e.id === recipeId) };
  }
}
