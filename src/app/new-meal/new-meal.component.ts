import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { Meal } from '../meal.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { MealService } from '../meal.service';


@Component({
  selector: 'new-meal',
  templateUrl: './new-meal.component.html',
  styleUrls: ['./new-meal.component.css'],
  providers: [MealService]
})
export class NewMealComponent {
  @Output() addClicker = new EventEmitter();
  @Output() showClicker = new EventEmitter();
  @Input() newMealForm;

  showNewMealForm(){
    this.showClicker.emit();
  }

  addMeal(name, details, calories){
    if(name !== '' && details !== '' && calories !== ''){
      var newMeal: Meal = new Meal(name, details, calories);
      this.mealService.addMeal(newMeal);
    } else {
      alert("Please fill all fields before submitting!");
    }
  }

    constructor(private mealService: MealService) { }
}
