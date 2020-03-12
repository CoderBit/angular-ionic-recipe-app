import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.modal';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Pizza',
      imageUrl: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      ingredients: ['Tomatoes', 'Mushrooms', 'Breads']
    },
    {
      id: 'r2',
      title: 'Grilled Steak',
      imageUrl: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80',
      ingredients: ['Tomatoes', 'Steak', 'Vegetables']
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
