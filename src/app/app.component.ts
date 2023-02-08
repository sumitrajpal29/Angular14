import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<h1>{{Title}}</h1><app-books></app-books>`,
    styles: ["h1{color:red}"]
})

export class AppComponent {
    Title="Book List"
 }