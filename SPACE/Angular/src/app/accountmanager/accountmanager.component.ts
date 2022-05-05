import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/user/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-accountmanager',
  templateUrl: './accountmanager.component.html',
  styleUrls: ['./accountmanager.component.css']
})
export class AccountmanagerComponent implements OnInit {
  title = 'user';
  users: User[] = [];   // Initializing an empty array to assign the users from the database and assigning it to a variable
  user: User = {
    userId: 0,
    username: '',
    password: '',
    email: ''
  }
  constructor(private userService: UserService) {

  }


  registrationForm!: FormGroup;
  //user: RegisteredUser;
  //formSubmit: boolean;

  ngOnInit() {
    this.registrationForm = new FormGroup({
      userName: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  getAllUsers() {
    // .subsrcibe makes sure that the Observable is called
    this.userService.getAllUsers()
    .subscribe(
      response => {
        this.users = response;
        //console.log(response);  // console.log prints log in console
      }
    );
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

  onSubmit2() {
    this.userService.updateUser(this.user)
    .subscribe(
      response => {
        this.getAllUsers();
      }
    );
  }

  deleteUser(userid: number) {
    this.userService.deleteUser(userid)
      .subscribe(
        response => {
          this.getAllUsers();
        }
      );
  }

  populateForm(user: User) {
    this.user = user;
  }
}
