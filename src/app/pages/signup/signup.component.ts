import { Component, OnInit } from '@angular/core';
import { UserService } from 'services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  }


  ngOnInit(): void {
  }

  formSubmit() {


    if (this.user.username == '' || this.user.username == null) {

      alert('Username is required!!')
      return;
    }
    // alert('Submitted successfully');
    this.userService.addUserAsAdmin(this.user).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(["/login"]);
       // alert('success');
      },
      (error) => {
        console.log(error);
       // alert('error');
      }
    );

  }



}
