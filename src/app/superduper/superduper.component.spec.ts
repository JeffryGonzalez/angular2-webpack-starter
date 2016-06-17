import {
  it,
  inject,
  describe,
  beforeEachProviders,
  expect
} from '@angular/core/testing';

import { SuperDuperComponent } from './superduper.component';

describe('App', () => {
  beforeEachProviders(() => [
    SuperDuperComponent
  ]);

  it ('should work   ', inject([SuperDuperComponent], (app: SuperDuperComponent) => {
    // Add real test here
    expect(2).toBe(3);
  }));
});
