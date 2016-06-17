import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { Book, Author } from '../models';
import { BookActions } from '../actions';


export interface BooksState {
  books: {
    ids: number[];
    entities: { [id: number]: Book }
  },
  authors: {
    entities: { [id: number]: Author }
  }

}


const initialState: BooksState = {
  books: {
    ids: [],
    entities: {}
  },
  authors: {
    entities: {}
  }
}
/**
 * The initial Reducer for Books
 */
export default function (state = initialState, action: Action): BooksState {
  const book: Book = action.payload;
  switch (action.type) {
    case BookActions.RECEIVED_BOOKS:
      console.log("REceived Books", action.payload);
      return action.payload;
    case BookActions.ADD_BOOK:

    default:
      return state;
  }
}


/**
 *These are slicers, or selectors. They are like queries.
 */
export function getAllEntities() {
  return (state$: Observable<BooksState>) => state$
    .select(s => s);
};

/**
 * Return books for the books list component. It gives us the books, and shows us information about the author.
 */
export function getBooks() {
  return (state$: Observable<BooksState>) => state$
    .let(getAllEntities())
    .map(res => {
      console.log("RES----", res);
      let result = Object.keys(res.books.entities).map(key => res.books.entities[key])
        .map(b => {
          let { firstName, lastName } = res.authors.entities[b.author];
          return Object.assign({}, b, { authorName: `${lastName}, ${firstName}` });
        })

      return result;
    });
}
