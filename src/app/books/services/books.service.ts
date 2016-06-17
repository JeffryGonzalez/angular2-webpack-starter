import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { normalize, Schema, arrayOf } from 'normalizr';
import { Book } from '../models';

@Injectable()
export class BooksService {
  private API_PATH: string = "http://localhost:1337/books";

  constructor(private http: Http) {

  }

  retrieveBooks(): Observable<any> {
    const bookSchema = new Schema('books');
    const authorSchema = new Schema('authors');
    const publisherSchema = new Schema('publishers', { idAttribute: 'publisherId' });
    bookSchema.define({
      author: authorSchema,
      publisher: publisherSchema
    });
    return this.http.get(this.API_PATH)
      .map(res => {
        let books = normalize(res.json()._data, arrayOf(bookSchema));
        console.log(books);
        return books;
      });
  }
}
