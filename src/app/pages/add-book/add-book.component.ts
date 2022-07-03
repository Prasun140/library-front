import { Component, OnInit } from '@angular/core';
import { BookService } from 'services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor( private bookService : BookService) {
   
   }
  public book = {
    title: '',
    description: '',
    author: '',
    publishYear: '',
    stock:20 ,
  }

  ngOnInit(): void {
  }

formSubmit(){
  this.bookService.createBook(this.book).subscribe(
    (data) => {
      console.log(data);
      alert("Book added successfully");
    },
    (error) => {
      console.log(error);
    }
  );
}
}
