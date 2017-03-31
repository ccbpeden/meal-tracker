import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { Meal } from '../meal.model';


@Component({
  selector: 'new-meal',
  templateUrl: './new-meal.component.html',
  styleUrls: ['./new-meal.component.css']
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
      var params = {
        "name": name,
        "details": details,
        "calories": calories
      }
      this.addClicker.emit(params);
    } else {
      alert("Please fill all fields before submitting!");
    }
  }
}
