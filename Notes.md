# Creating new Angular *Workspace*
```
ng new name
```

To open all in VScode 
```
cd name
code .
```

# Adding *.gitignore* after pushing into github by mistake
```
git rm -r -cached .
Add .gitignore file or required updates in .gitignore
add ., commit and push
```

# Understanding File Structure of Angular
https://angular.io/guide/file-structure

# Had to create Book a separate component
Book card was getting more and more data, so created a separate component Book. Now program looks neat and clean and we can use Book component to anywhere else.

# Types Folder
Created a different folder for interfaces named types, so that we can access Book interface in Books component and Book component also.

# Parent to Child data sending
Decorate the variable with @Input() where you are going to get data in child component.
https://angular.io/generated/images/guide/inputs-outputs/input-output-diagram.svg

Into Parent Component
```
<ng-container *ngFor="let oneBook of books,let i= index">
        <app-book [book]="oneBook"></app-book>
   </ng-container>
```

Into Child Component
``` @Input() book: Book = {} as Book; ```


# Child to Parent data sending

https://angular.io/guide/inputs-outputs#sending-data-to-a-parent-component

In Child component:

Make a instance of type EventEmitter and decorate it with @Output decorator in Child component. Define data type which will be emitted.
It will be used to emit custom events.

Import Output and EventEmitter from @angular/core module.

Emit required data using this variables emit() method.

```
@Output sendName=new EventEmitter<String>();
sendName.emit("Sumit Rajpal");
```

In Parent component:

In the Parent component template use child component selector.

In the child selector use event binding to the event you created in child component(sendName), and get data from child component's events.

Now you can use this data in Parent Component

```
<h1>
<app-childComp (sendName)='setStudentName( $event )'></app-childComp>
</h1>
</code>
```

# How to delete a commit

If you want to delete last commit
```
git reset --hard HEAD~1
```
it will make Head to head-1.

if you want to make head 2nd previous one do:
```
git reset --hard HEAD~2
```

If you had pushed These commits already and your current branch is behind the remote one, then do:
```
git push -f
```

# Service 
Services in Angular are simply typescript classes with the *@injectible decorator*. This decorator tells angular that the class is a service and can be injected into components that need that service. They can also inject other services as dependencies.

One of the best use of service is to get data from data sources. Like fetching data from http requests.

Services are usually implemented through dependency injection.

# Dependency Injection
DI is wired into Angular framework.

You don't have to create objects/instances of required dependencies again and again, Angular checks that instance of required dependency is available in registry or not, if not, then it creates one instances of that dependency and uses this one instance/object everywhere needed.

**How to inject DI:**

Example:

There is a ***BookService*** service, we are injecting it into our component:
```
books: Book[] = [];

  constructor(private bookService: BooksService) {
    console.log("In constructor");
    this.books = bookService.getBooks();
  }
  ```

# Custom/Feature Module
If you want to create different module for some components, then in angular CLI:
```
ng generate module moduleName
```

Add components in this modules *declarations*,
Remove that components from AppModule's declarations,
Instead add new module into imports of AppModule.

Example: Into BooksModule,
```
@NgModule({
  declarations: [BooksComponent, BookComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    BooksComponent,
  ]
})
export class BooksModule { }

```
Now this module will handle Books, Book components.
Into AppModule, remove these components from declarations and add BookModule in imports:
```
@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, BooksModule],
    bootstrap: [AppComponent]
})
```