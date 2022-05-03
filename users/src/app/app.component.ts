import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { UsersService } from './service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'user';
  users: User[] = [];   // Initializing an empty array to assign the users from the database and assigning it to a variable
  user: User = {
    userId: 0,
    username: '',
    password: '',
    email: ''
  }
  constructor(private usersService: UsersService) {

  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    // .subsrcibe makes sure that the Observable is called
    this.usersService.getAllUsers()
    .subscribe(
      response => {
        this.users = response;
        //console.log(response);  // console.log prints log in console
      }
    );
  }

  onSubmit() {
    this.usersService.addUser(this.user)
      .subscribe(
        response => {
          this.getAllUsers();
          this.user = {
            userId: 0,
            username: '',
            password: '',
            email: ''
          };
        }
      );
  }

  onSubmit2() {
    this.usersService.updateUser(this.user);
  }

  deleteUser(userid: number) {
    this.usersService.deleteUser(userid)
      .subscribe(
        response => {
          this.getAllUsers();
        }
      );
  }

  populateForm(user: User) {
    this.user = user;
  }

  updateUser(user: User) {
    this.usersService.updateUser(user)
    .subscribe(
      response => {
        this.getAllUsers();
      }
    );
  }



}
