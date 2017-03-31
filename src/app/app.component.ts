import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A Meal Tracker!';
  newMealForm = false;
  selectedMeal = null;
  filterByCaloricity:string = "allMeals";
  parentMeals: Meal[] = [
    new Meal('Breakfast', '2 bowls Quinoa & Dates', 476),
    new Meal('Elevenses', 'icecream, cheetos, and fudge', 1325),
    new Meal('Lunch', 'asparagus, toast, lox', 563)
  ]

  showNewMealForm(){
    this.newMealForm = true;
    console.log(this.newMealForm);
  }

  addMeal(name, details, calories){
    var newMeal = new Meal(name, details, calories);
    this.parentMeals.push(newMeal);
    this.newMealForm = false;
  }

  selectMeal(meal){
    this.selectedMeal = meal;
  }

  closeEditForm(){
    this.selectedMeal = null;
  }

  onChange(optionFromMenu) {
    this.filterByCaloricity = optionFromMenu;
  }
}
