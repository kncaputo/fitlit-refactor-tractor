# FitLit Refactor Tractor

## Abstract

`FitLit Refactor Tractor` is a group project for Module 2 at [Turing School of Software and Design](https://turing.io/) that implemented several new technologies to a pre-existing codebase. We had get the application working, build upon and refactor data file test suites, make sure all functional expectations were being met, increase accessability, switch CSS into SCSS, and make the transition from using data files to server requests using `GET` and `POST` requests. See the original project spec [here](https://frontend.turing.io/projects/module-2/refactor-tractor.html).

## How to Access this Application

- Visit the [deployed site](https://kncaputo.github.io/fitlit-refactor-tractor/).

- Or, on your command line:

  + Clone the repo- `git clone git@github.com:kncaputo/fitlit-refactor-tractor.git`

  + Install NPM packages- `npm install`

  + Start application- `npm start`

  + In your browser, go to `localhost:8080`

- To test the code:

  - `cd`  into the repo, then run- `npm test`

## Built With:

- JavaScript
- HTML
- SCSS
- Webpack
- API's

## Planning

We used GitHub Projects and Issues to document the project workflow and keep track of our to-dos. Using `Test Driven Development (TDD)`, we started by re-organizing our data model, primarily the `User` class, by creating three sub-classes that handled each individual instance of a user's `Sleep`, `Activity`, and `Hydration` history. We were then able to reflect our updated logic on the `DOM`.

## Wins

+ Sticking to the schedule we outlined in our project board 
+ Making a more readable codebase and updating all syntax to `ES6`
+ Refactoring current tests and adding sad path tests to create a robust testing suite
+ Obtaining a 100% accessibility score
+ Refactoring CSS into SCSS
+ Utilizing `Inheritance` with our `API's` via our `Service` parent class.
+ Fetching `GET` and `POST` requests to retrieve and add information to API's
+ Taking advantage of the resources available to us by requesting a code review and scheduling time to review material with John Adams. 

## Challenges

+ Working with someone else's codebase was challenging at first because we were unfamiliar with the naming conventions and the overall functionality of the app. 
+ Balancing all the new technologies that were recently exposed to us in a dynamic way
+ `Chai Spies` - while we got our tests passing, we're all still fuzzy on the usefulness of testing with Chai Spies in this case. 

## Contributors

- [Alyssa Bull](https://github.com/alyssabull)
- [Bailey Dunning](https://github.com/baileydunning)
- [Kara Caputo](https://github.com/kncaputo)
- Kaitlin Davis (Code Review)
- Will Mitchell (Project Manager)
