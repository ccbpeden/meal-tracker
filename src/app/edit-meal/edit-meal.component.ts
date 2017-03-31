import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';
import { Meal } from '../meal.model';

@Component({
  selector: 'edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.css']
})
export class EditMealComponent {
  @Input() selectedMeal: Meal;
  @Output() doneClicker = new EventEmitter();

  closeEditForm(){
    this.doneClicker.emit();
  }

}
