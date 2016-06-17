import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Book } from '../models';

import { BooksState }  from '../reducers/books';

@Injectable()
export class BookActions {

  static GET_BOOKS = '[BOOK] GetBooks';
  getBooks(): Action {
    return {
      type: BookActions.GET_BOOKS
    }
  }

  static RECEIVED_BOOKS = '[BOOK] ReceivedBooks';
  receivedBooks(books: BooksState): Action {
    return {
      type: BookActions.RECEIVED_BOOKS,
      payload: books
    }
  }

  static ADD_BOOK = '[BOOK] Add';
  addBook(book: Book): Action {
    return {
      type: BookActions.ADD_BOOK,
      payload: book
    }
  }
}
