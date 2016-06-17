import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { Book } from '../models';
import { BookActions } from '../actions';

export interface BooksState {
  ids: number[];
  entities: { [id: number]: Book }
}

const initialState: BooksState = {
  ids: [],
  entities: {}
}

export default function (state = initialState, action: Action): BooksState {
  const book: Book = action.payload;
  switch (action.type) {
    case BookActions.RECEIVED_BOOKS:
      return {
        entities: Object.assign({}, state.entities, action.payload.entities),
        ids: action.payload.ids
      };
    case BookActions.ADD_BOOK:
      return {
        ids: [...state.ids, book.id],
        entities: Object.assign({}, state.entities, {
          [book.id]: book
        })
      }
    default:
      return state;
  }
}


export function getBookEntities() {
  return (state$: Observable<BooksState>) => state$
    .select(s => s.entities);
};

export function getBooks() {
  return (state$: Observable<BooksState>) => state$
    .let(getBookEntities())
    .map(res => {
      let result = Object.keys(res).map(key => res[key]);
      return result;
    });
}
