import { Component } from '@angular/core';
import { BooksComponent } from './books/books.component';
import '../../public/bootstrap/css/bootstrap.min.css';


@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [BooksComponent]
})
export class AppComponent {
  monster = "Dog Spit";
 }
