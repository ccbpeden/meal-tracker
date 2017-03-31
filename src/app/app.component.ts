import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A Meal Tracker!';
  parentSelectedMeal = null;
  parentNewMealForm = false;
  parentMeals: Meal[] = [
    new Meal('Breakfast', '2 bowls Quinoa & Dates', 476),
    new Meal('Elevenses', 'icecream, cheetos, and fudge', 1325),
    new Meal('Lunch', 'asparagus, toast, lox', 563)
  ]

  addMeal(params){
    var newMeal = new Meal(params.name, params.details, params.calories);
    this.parentMeals.push(newMeal);
    this.parentNewMealForm = false;
  }

  showNewMealForm(){
    this.parentNewMealForm = true;
  }

  selectMeal(meal){
    this.parentSelectedMeal = meal;
  }

  closeEditForm(){
    this.parentSelectedMeal = null;
  }
}
