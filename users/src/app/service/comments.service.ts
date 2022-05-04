import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Comment } from '../models/comment.model'

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  baseUrl = 'https:localhost:7242/api/Comment'
  constructor(private http: HttpClient) { }

  // Get all comments
  getAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.baseUrl);
  }

  // Get all comments for id
  getAllCommentsFor(userId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.baseUrl + '/' + userId);
  }

  // Add comment
  addComment(comment: Comment): Observable<Comment> {
    comment.commentId = 0;
    return this.http.post<Comment>(this.baseUrl, comment);
  }

  // Delete comment
  deleteComment(commentId: number): Observable<Comment> {
    return this.http.delete<Comment>(this.baseUrl + '/' + commentId);
  }

}
