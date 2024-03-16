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

## 134. Navigating Programmatically : Router, navigate  

    constructor(private router : Router) { }
    this.router.navigate(['/servers']);

## 135. Using Relative Paths in Programmatic Navigation : route : ActivatedRoute, {relativeTo:this.route}

    Unlike the routerLink, the Router's navigate method does not know in which component you are
    So it will consider the router as absolute path
    Unless you specify the relativeTo option

        private route : ActivatedRoute
        {relativeTo:this.route}

    // absolute
    // => /servers
    this.router.navigate(['servers']);

    // absolute
    // => /servers
    this.router.navigate(['/servers']);

    // relative
    // => servers/servers
    this.router.navigate(['servers'], {relativeTo:this.route})

    // absolute
    // => /servers
    this.router.navigate(['/servers'], {relativeTo:this.route})

## 136. Passing Parameters to Routes

    {path: 'users:id', component : UserComponent},
    http://localhost:4200/users/1
    http://localhost:4200/users/nothing

## 137. Fetching Route Parameters : ActivatedRoute, snapshot.params

    {path: 'users/:id/:name', component : UserComponent},

    constructor(private route : ActivatedRoute) { }
    this.user = { id : this.route.snapshot.params['id'], name : this.route.snapshot.params['name']};
    
    http://localhost:4200/users/123/nameExample

## 138. Fetching Route Parameters Reactively : ActivatedRoute, params.subscribe

    constructor(private route : ActivatedRoute) { }
    
    this.route.params.subscribe(
      (params: Params) => {
        this.user.id=params['id'];
        this.user.name=params['name'];
      }
    )

## 139. An Important Note about Route Observables : unsubscribe to a params subscribtion on Object destruction
    
    paramsSubscription : Subscription;
    
    this.paramsSubscription = this.route.params.subscribe(...

    ngOnDestroy(): void {
        this.paramsSubscription.unsubscribe;
    }

## 140. Passing Query Parameters and Fragments : queryParams, fragment

    {path : 'servers/:id/edit', component : EditServerComponent},
    
    this.router.navigate(["/servers", id, 'edit'], {queryParams :{allowEdit:1, defaultEdit:'0'}, fragment:"loading"});

    [routerLink]="['/servers',1,'edit']"
    [queryParams]="{allowEdit:1, defaultEdit:0}"
    [fragment]="'loading'"

## 141. Retrieving Query Parameters and Fragments : snapshot.queryParams, snapshot.fragment, queryParams.subscribe, fragment.subscribe


    constructor(private serversService: ServersService, private route : ActivatedRoute) { }

    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe();
    this.route.fragment.subscribe();