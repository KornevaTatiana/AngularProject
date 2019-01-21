import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookNew } from '../bookNew';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {

  books: Book[];
  booksNew: BookNew[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }

  clickAdd(id, name) {
    // @ts-ignore
    this.books.push(new Book(id, name));
  }
}
