import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';
import { Meal } from '../meal.model';



@Component({
  selector: 'meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css']
})
export class MealDetailComponent {
  @Input() childMealList: Meal[];
  @Output() selectClicker = new EventEmitter();
  filterByCaloricity:string = "allMeals";

  selectMeal(meal: Meal[]) {
    this.selectClicker.emit(meal);
  }

  onChange(optionFromMenu) {
    this.filterByCaloricity = optionFromMenu;
  }

  fatty(meal) {
    if (meal.calories <= 500) {
      return "bg-success";
    } else if (meal.calories > 500) {
      return "bg-warning";
    }
  }
}
