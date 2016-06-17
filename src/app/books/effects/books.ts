import { Injectable } from '@angular/core';
import { StateUpdates, Effect, toPayload } from '@ngrx/effects'
import 'rxjs';
import { BooksService } from '../services/books.service';
import { BookActions } from '../actions';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BookEffects {
  constructor(private update$: StateUpdates<any>,
    private service: BooksService,
    private bookActions: BookActions) {  }

  @Effect() load$ = this.update$
    .whenAction(BookActions.GET_BOOKS)
    .switchMap(() => this.service.retrieveBooks())
    .map(data => {
      return this.bookActions.receivedBooks({
        books: {
          ids: data.result,
          entities: data.entities.books
        },
        authors: {
          entities: data.entities.authors
        }
      })
    })
  // @Effect() load$ = this.update$
  // .whenAction(BookActions.GET_BOOKS)
  // .switchMap(() => this.service.retrieveBooks())
  // .map(books => {
  //   return this.bookActions.receivedBooks({
  //     ids: books.result,
  //     entities: books.entities.books
  //   });
  // })

  // @Effect() load$ = this.update$
  //   .whenAction(AppActions.LOAD_DATA)
  //   .switchMap(() => this.service.retrieveBooks())
  //   .map(data => {
  //     let result = Observable.merge(() => {
  //       this.bookActions.receivedBooks({
  //         ids: data.result,
  //         entities: data.entities.books
  //       });
  //       this.authorActions.receivedAuthors({
  //         ids: [1, 2, 3],
  //         entities: data.entities.authors
  //       })
  //     });
  //     return result;
  //   });

}
