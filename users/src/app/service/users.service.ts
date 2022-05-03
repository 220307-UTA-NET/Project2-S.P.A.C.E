import { HttpClient } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = 'https://localhost:7242/api/User'
  constructor(private http: HttpClient) { }   // To inject HttpClient in the constructor

  // Get all users
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  addUser(user: User): Observable<User> {
    user.userId = 0;
    return this.http.post<User>(this.baseUrl, user);
  }

  deleteUser(userId: number): Observable<User> {
    return this.http.delete<User>(this.baseUrl + '/' + userId);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.baseUrl + '/' + user.userId, user);
  }
}
