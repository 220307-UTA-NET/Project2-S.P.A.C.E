import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../model/user.model'
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // User Object
  user: User = {
    userId: 0,
    username: '',
    password: '',
    email: ''
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }


  login(givenUsername: string, givenPassword: string) {
    this.userService.getUserbyName(givenUsername)
    .subscribe(
      response => {
        console.log(response);
        this.user = response;
      }
    );
    console.log("givenPassword:" + givenPassword);
    if (this.user === null) {
      // Print user does not exist
      alertify.error("Username does not exist.");
    }
    else if (givenUsername === this.user.username && givenPassword === this.user.password) {
        // login
      alertify.success("User logged in.");
    }
    else {
      // password is wrong
      alertify.error("Incorrect password.");
    }
  }

  getUser(userid: number) {
    this.userService.getUser(userid)
    .subscribe(
      response => {
        console.log(response);
        this.user = response;
      }
    );
  }


}
