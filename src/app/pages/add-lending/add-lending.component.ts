import { Component, OnInit } from '@angular/core';
import { LendingService } from 'services/lending.service';
@Component({
  selector: 'app-add-lending',
  templateUrl: './add-lending.component.html',
  styleUrls: ['./add-lending.component.css']
})
export class AddLendingComponent implements OnInit {

  constructor(private lendingService : LendingService) { }
  public lendingObject= {
    userId:'',
    bookId:'',

  }
  ngOnInit(): void {
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
