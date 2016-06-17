import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http'

import { provideStore } from '@ngrx/store';

import { AppComponent } from './app/app.component';
import { runEffects } from '@ngrx/effects';
import effects  from './app/books/effects';
import reducer from './app/books/reducers';
import actions from './app/books/actions';
import { BooksService } from './app/books/services/books.service';

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
  provideStore(reducer),
  actions,
  runEffects(effects),
  BooksService,
  HTTP_PROVIDERS]

);
