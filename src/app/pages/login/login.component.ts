import { Component, OnInit } from '@angular/core';
import { UserService } from 'services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  public user = {
    username: '',
    password: '',
  }

  ngOnInit(): void {
  }

  formSubmit() {

    console.log(this.user)

    if (this.user.username == '' || this.user.username == null) {

      alert('Username is required!!')
      return;
    }
    // alert('Submitted successfully');
    this.userService.login(this.user.username, this.user.password).subscribe(
      (data) => {
        console.log(data);
        localStorage.setItem("username", data.username);
        localStorage.setItem("id", data.id.toString());
        if(data.role == 'admin'){
          this.router.navigate(["/admin-dash"]);
        } else {
          this.router.navigate(["/student-dash"]);
        }
        alert('success');
      },
      (error) => {
        console.log(error);
        alert('error');
      }
    );

  }

}
