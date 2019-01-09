import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './list-books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  getBooks(): Book[] {
    return BOOKS;
  }

  constructor() { }
}
