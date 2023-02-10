## Creating new Angular *Workspace*
`ng new name`

To open all in VScode 
`cd name`
`code .`

## Adding *.gitignore* after pushing into github by mistake
`git rm -r -cached .`
`Add .gitignore file or required updates in .gitignore`
`add ., commit and push`

## Understanding File Structure of Angular
https://angular.io/guide/file-structure

## Had to create Book a separate component
Book card was getting more and more data, so created a separate component Book. Now program looks neat and clean and we can use Book component to anywhere else.

## Types Folder
Created a different folder for interfaces named types, so that we can access Book interface in Books component and Book component also.

## Parent to Child data sending
Decorate the variable with @Input() where you are going to get data in child component.
https://angular.io/generated/images/guide/inputs-outputs/input-output-diagram.svg

Into Parent Component
`<ng-container *ngFor="let oneBook of books,let i= index">
        <app-book [book]="oneBook"></app-book>
    </ng-container>`

Into Child Component
`@Input() book: Book = {} as Book;`

## Child to Parent data sending

https://angular.io/guide/inputs-outputs#sending-data-to-a-parent-component

In Child component:

Make a instance of type EventEmitter and decorate it with @Output decorator in Child component. Define data type which will be emitted.
It will be used to emit custom events.

Import Output and EventEmitter from @angular/core module.

Emit required data using this variables emit() method.

<code>
@Output sendName=new EventEmitter<String>();<br>
sendName.emit("Sumit Rajpal");
</code>

In Parent component:

In the Parent component template use child component selector.

In the child selector use event binding to the event you created in child component(sendName), and get data from child component's events.

Now you can use this data in Parent Component

<code>
<h1>
<app-childComp (sendName)='setStudentName( $event )'></app-childComp>
</h1>
</code>





