# MealTracker

## Description

A meal tracking app.

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.


## Epicodus JS Week 3 Project, 3/24/17

## By Charles Peden

## Prerequisites

You will need the following software properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd meal-tracker`
* `npm install`
* `bower install`

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Known Bugs
* No Known Bugs

## Technologies Used
* Git, CSS, JS, Angular, Nodejs, Bower

## Implementation Plan
1. Develop User Stories
2. Lay out site plan:
  * Identify data models
  * Rough out visual flow of site, identify components
  * Map data flow between components
  * review data models
4. Lay out root component with all functionality therein
5. Implement functionality for user stories, 1 at a time.
6. Refactor root into previously identified components
7. Style Pages
8. Implement Stretch Goals


## User Stories

As a user, I want to view a list of foods I have logged.
As a user, I want to log a food I have eaten by submitting a form with food name, calories and details.
As a user, I want to click a food to edit its name, details or calories (in case As a user, I decide to pretend my fries were 100 calories instead of 365).
As a user, I want options to view all meals, only high-calorie meals (more than 500 calories), or only lower-calorie foods (less than 500 calories).

Stretch User Stories:
As a user, I want to be able to view the total number of calories consumed in a day, and/or the average number of calories consumed in a day.
As a user, I want to record when each food was eaten.
As a user I want to be able to view multiple days of food logs, grouped by day.


##Site plan

Data Model: Meal(Name, Details, Calories, DateTime)
Components:
0. app-root:
1. about(displaying information about the program)
2. contact(displaying contact info)
3. meal-detail(display a list of meals entered with details)
  * selectMeal(): determines which meal is currently being edited
4. new-meal(a form for adding a meal to the database)
  * addMeal(): add a meal to the database, hide the add meal form.component.
5. edit-meal(a form for changing the details on a specific meal)
  * editMeal(): change the details of a selectedMeal.
6. calorie-dashboard(show calories for a specific day/average calories consumed, select which day to view)

#Stretch Goals
1. Use Moment for date/time stamp
2. Style with SASS

## Copyright (c)
* 2017 Charles Peden

## License
* MIT
