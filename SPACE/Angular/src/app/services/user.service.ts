import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../user/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'https://localhost:7242/api/User'
  constructor(private http: HttpClient) { }

    // Get all users
    getAllUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.baseUrl);
    }

  // Get a user
  getUser(userid: number): Observable<User> {
    return this.http.get<User>(this.baseUrl + '/' + userid);
  }

  // Get a user by username
  getUserbyName(username: string): Observable<User> {
    return this.http.get<User>(this.baseUrl + '/' + username);
  }
  
  // Add a user
  addUser(user: User): Observable<User> {
    user.userId = 0;
    return this.http.post<User>(this.baseUrl, user);
  }

  // Delete a user
  deleteUser(userid: number): Observable<User> {
    return this.http.delete<User>(this.baseUrl + '/' + userid);
  }

  // Update a user
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.baseUrl + '/' + user.userId, user);
  }
}
