import { Component, OnInit } from '@angular/core';

import { BookService } from 'services/book.service';
import { BookModel } from '../book.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  cols = ["ID", "TITLE", "DESCRIPTION", "AUTHOR", "PUBLISH YEAR", "STOCK"];
  books: BookModel[] = [];

  getBooks(){
    this.bookService.getBooks().subscribe((data) => {
      console.log({data});
      this.books = data;
    },
    (error) => {
      console.log({error});
    })
  }

  createBook(){}

}
