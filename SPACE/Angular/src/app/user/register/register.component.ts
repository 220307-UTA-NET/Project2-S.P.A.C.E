import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user.model'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // User object
  user: User = {
    userId: 0,
    username: '',
    password: '',
    email: ''
  }

  registrationForm!: FormGroup;
  //user: RegisteredUser;
  //formSubmit: boolean;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      userName: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  get userName()
  {
    return this.registrationForm.get('userName') as FormControl;
  }

  get password()
  {
    return this.registrationForm.get('password') as FormControl;
  }

  get Email()
  {
    return this.registrationForm.get('email') as FormControl;
  }

  Submission()
  {
    this.userService.addUser(this.user)
    .subscribe(
      response => {
        this.user = response;
        // console.log(response);
      }
    );
    this.registrationForm.reset();
    return false;
    // console.log(this.registrationForm.value);
  }

  // addUser() {
  //   this.userService.addUser(this.user)
  //   .subscribe(
  //     response => {
  //       // this.user = response;
  //       console.log(response);
  //     }
  //   );
  // }
  

}
