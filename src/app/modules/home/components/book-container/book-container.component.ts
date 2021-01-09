import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/shared/services/book.service';
import { Book } from 'src/app/shared/interfaces/book';

@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.scss']
})
export class BookContainerComponent implements OnInit {
  books: Book[];
  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(
      books => this.books = books
    );
  }

}
