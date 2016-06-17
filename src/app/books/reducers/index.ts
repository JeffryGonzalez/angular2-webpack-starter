import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';

import { storeLogger } from 'ngrx-store-logger';
import { compose } from '@ngrx/core/compose';

import { combineReducers } from '@ngrx/store';

import booksReducer, * as fromBooks from './books';


export interface AppState {
  books: fromBooks.BooksState;
}

export default compose(storeLogger(), combineReducers)({
  books: booksReducer
});

 export function getBooksState() {
  return (state$: Observable<AppState>) => state$
    .select(s => s.books);
}

 export function getBookEntities() {
   return compose(fromBooks.getAllEntities(), getBooksState());
 }
 export function getBooks() {
   return compose(fromBooks.getBooks(), getBooksState());
 }
