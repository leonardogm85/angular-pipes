import { Component } from '@angular/core';

import { interval, map } from 'rxjs';

@Component({
  selector: 'app-pipe-examples',
  templateUrl: './pipe-examples.component.html',
  styleUrls: ['./pipe-examples.component.css']
})
export class PipeExamplesComponent {

  book = {
    title: 'Learning JavaScript Data Structures and Algorithms',
    rating: 4.54321,
    length: 426,
    price: 46.99,
    publishedOn: new Date(2018, 4, 30),
    url: 'https://a.co/d/53f694m'
  }

  books = [
    'Clean Code',
    'Clean Architecture',
    'The Clean Coder',
    'Clean Agile',
    'Clean Craftsmanship'
  ];

  filter = '';

  valuePromise = new Promise((resolver, reject) => {
    setTimeout(() => resolver('Value Async 1'), 2000);
  });

  valueObservable = interval(2000).pipe(map(value => 'Value Async 2'));

  addBook(newBook: string): void {
    this.books.push(newBook);
  }

  getBooks(): string[] {
    if (this.books.length === 0 || !this.filter) {
      return this.books;
    }

    return this.books.filter(value => value.toLocaleLowerCase().indexOf(this.filter.toLocaleLowerCase()) >= 0);
  }

}
