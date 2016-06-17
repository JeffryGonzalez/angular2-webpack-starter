import {
  it,
  inject,
  describe,
  beforeEachProviders,
  expect
} from '@angular/core/testing';

import { BooksComponent } from './books.component';

describe('App', () => {
  beforeEachProviders(() => [
    BooksComponent
  ]);

  it ('should work', inject([BooksComponent], (app: BooksComponent) => {
    // Add real test here
    expect(2).toBe(3);
  }));
});
