import { Injectable } from '@angular/core';
import { StateUpdates, Effect } from '@ngrx/effects'
import 'rxjs';

import {BookActions} from '../actions';
@Injectable()
export class BookEffects {
  constructor(private update$: StateUpdates<any>) {

  }

  @Effect() load$ = this.update$
    .whenAction(BookActions.GET_BOOKS)
    .map(res => {
      const initialState = {
        ids: [1, 2],
        entities: {
          1: {
            id: 1,
            title: "REST in Practice",
            author: "John Smith",
            price: 19.99
          },
          2: {
            id: 2,
            title: "The NG Book",
            author: "John Jones",
            price: 32.99
          }
        }
      };
      return {
        type: BookActions.RECEIVED_BOOKS,
        payload: initialState
      }
    });
}