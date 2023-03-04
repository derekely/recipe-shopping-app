import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] =  [
    new Recipe("Test Recipe", "Wow a test recipe!!", "https://freesvg.org/img/1533577397.png"),
    new Recipe("Test Recipe", "Wow a test recipe!!", "https://freesvg.org/img/1533577397.png")
  ];

  constructor(){ }
  
  ngOnInit(){

  }
}
