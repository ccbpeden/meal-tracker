import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CaloricityPipe } from './caloricity.pipe';
import { MealDetailComponent } from './meal-detail/meal-detail.component';
import { NewMealComponent } from './new-meal/new-meal.component';
import { EditMealComponent } from './edit-meal/edit-meal.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactDevComponent } from './contact-dev/contact-dev.component';
import { AboutSiteComponent } from './about-site/about-site.component';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    CaloricityPipe,
    MealDetailComponent,
    NewMealComponent,
    EditMealComponent,
    WelcomeComponent,
    ContactDevComponent,
    AboutSiteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
