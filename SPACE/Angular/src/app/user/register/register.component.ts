import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm!: FormGroup;
  //user: RegisteredUser;
  //formSubmit: boolean;
  constructor() { }

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
    console.log(this.registrationForm.value);
  }
}
