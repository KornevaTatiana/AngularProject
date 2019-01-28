import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { BOOKS } from '../list-books';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {

  books: Book[];
  name: string;
  i: any;
  searchStr = '';

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }

  clickAdd(name) {
    this.books.push(new Book(Math.round(Math.random() * 7 + 10), name));
  }

  clickDelete(i): void {
    BOOKS.splice(i, 1);
  }

  cleanButtonClick() {
    this.name = ('');
  }
}
