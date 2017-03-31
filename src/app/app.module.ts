import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CaloricityPipe } from './caloricity.pipe';
import { MealDetailComponent } from './meal-detail/meal-detail.component';
import { NewMealComponent } from './new-meal/new-meal.component';

@NgModule({
  declarations: [
    AppComponent,
    CaloricityPipe,
    MealDetailComponent,
    NewMealComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
