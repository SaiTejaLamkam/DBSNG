# DBSNG

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.4.

For Demo purpose deployed the project in firebase : [Application URL](https://ngdemo-290b9.web.app) version 12.1.4.

## Libraries Used
1. "@ng-bootstrap/ng-bootstrap": ^10.0.0
2. "bootstrap": "^5.1.0"
3. "bootstrap-icons": "^1.5.0"
4. "jquery": "^3.6.0"

## Techniques Used
1. Subject - To show Loader and share the edited/added user data
2. Interceptor - To handle API Errors Globally
3. Dependency Injection - Used Common Service file for API calls and common functionality
4. Routing - Used "/users" as default route annd to show list of users
5. Used Reactive form to Add/Edit User
6. Parent and Child Components data transfer using @Input
7. Showing Loader when api call is pending

## Note - [jsonplaceholder](https://jsonplaceholder.typicode.com/guide/) does not provide any API to edit the User data , so i handled it locally 

## Installations
1. Install [Node Js](https://nodejs.dev/download)
2. Clone/Download project from https://github.com/SaiTejaLamkam/DBSNG
3. Do npm install

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
