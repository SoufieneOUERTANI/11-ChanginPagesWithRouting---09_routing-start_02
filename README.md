# RoutingStart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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

## 130. Setting up and Loading Routes => Routes, path, component

    Navigating only by taping the link in the adress bar

    http://localhost:4200/
    http://localhost:4200/users
    http://localhost:4200/servers

    const appRoutes : Routes = [
    {path : '', component : HomeComponent},
    {path : 'users', component : UsersComponent},
    {path : 'servers', component : ServersComponent},
    ]

    RouterModule.forRoot(appRoutes)

    <!-- replace the component selector by router-outlet directive, to load the component associated with the route entered, at that place  -->
    <router-outlet></router-outlet>




## 131. Navigating with Router Links => href, routerLink

    Navigating by clicking a page element => Associating a link in the adress bar

### by href => refreshing the page at each click
        <li role="presentation" class="active"><a href="/">Home</a></li>
        <li role="presentation"><a href="/servers">Servers</a></li>
        <li role="presentation"><a href="/users">Users</a></li>

### by routerLink => avoiding refreshing the page at each click

        <li role="presentation" class="active"><a routerLink="/">Home</a></li>
        <li role="presentation"><a routerLink="/servers">Servers</a></li>
        <li role="presentation"><a [routerLink]="['/users']">Users</a></li>

## 132. Understanding Navigation Paths : ".", "..", "/", ""

    The relative path can start with  "." or ".."
    The absolute path can be loaded by "/" from any level
    At the root level(router-outlet), the absolute path can start with either "" or "/"

    Can "" be a relative path ?

## 132 bis.Remake order

## 133. Styling Active Router Links : routerLinkActive, routerLinkActiveOptions

    routerLinkActive

    <!--  For the  root path ""-->
    [routerLinkActiveOptions]="{exact:true}
