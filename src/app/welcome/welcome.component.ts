import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal.model';
import { MealService } from '../meal.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [MealService]
})

export class WelcomeComponent implements OnInit {
  parentSelectedMeal = null;
  parentNewMealForm = false;
  parentMeals: FirebaseListObservable<any[]>;

  constructor(private mealService: MealService) {}

  ngOnInit(){
    this.parentMeals = this.mealService.getMeals();
  }

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
