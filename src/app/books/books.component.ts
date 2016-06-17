import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs';
import { AppState, getBooks} from './reducers';
import { BookActions } from './actions';
@Component({
  selector: 'my-books',
  template: require('./books.component.html'),
  styles: [require('./books.component.css')],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksComponent {
  books: Observable<any>;
  action$ = new Subject<Action>();
  constructor(private store: Store<AppState>, private bookActions: BookActions) {

    this.books = store.let(getBooks());
    this.action$.subscribe(store);
    this.action$.next(this.bookActions.getBooks());
  }
}
