import { Component, OnInit } from '@angular/core';
import { BookService } from 'services/book.service';
import { LendingService } from 'services/lending.service';
import { BookModel } from '../book.model';
@Component({
  selector: 'app-add-lending',
  templateUrl: './add-lending.component.html',
  styleUrls: ['./add-lending.component.css']
})
export class AddLendingComponent implements OnInit {

  constructor(private lendingService : LendingService, private bookService: BookService) { }
  public lendingObject= {
    userId:localStorage.getItem("id"),
    bookId:'',

  }

  books: BookModel[] = [];
  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data
    }, (error) => {
      console.log(error);
    })
  }

  formSubmit(){
    this.lendingService.createLending(this.lendingObject).subscribe(
      (data) => {
        console.log(data);
        alert("Lending added successfully");
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
