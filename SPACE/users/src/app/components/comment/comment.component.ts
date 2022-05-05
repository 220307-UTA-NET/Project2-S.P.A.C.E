import { Component, OnInit } from '@angular/core';
import { Comment } from '../../models/comment.model';
import { CommentsService } from 'src/app/service/comments.service';
import { User } from '../../models/user.model'
import { UsersService } from 'src/app/service/users.service';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments: Comment[] = [];
  comment: Comment = {
    commentId: 0,
    content: '',
    userId: 0
  };
  // User
  user: User = {
    userId: 0,
    username: '',
    password: '',
    email: ''
  }

  constructor(private commentService: CommentsService, private usersService: UsersService) { }

  ngOnInit(): void {
    // Get the user
    // ??
    // Print all comments
    this.getAllComments();
  }



  getAllComments() {
    // .subsrcibe makes sure that the Observable is called
    this.commentService.getAllComments()
    .subscribe(
      response => {
        this.comments = response;
        //console.log(response);  // console.log prints log in console
      }
    );
  }

  getAllCommentsFor(userId: number) {
    this.commentService.getAllCommentsFor(userId)
    .subscribe(
      response => {
        this.getAllCommentsFor(userId);
      }
    );
  }

  onSubmit() {
    this.commentService.addComment(this.comment)
      .subscribe(
        response => {
          this.getAllComments();
          this.comment = {
            commentId: 0,
            content: '',
            userId: 0
          };
        }
      );
    }

    deleteComment(commentId: number) {
      this.commentService.deleteComment(commentId)
      .subscribe(
        response => {
          this.getAllComments();
        }
      );
    }

    updateComment(comment: Comment) {
      this.commentService.updateComment(this.comment)
      .subscribe(
        response => {
          this.getAllComments();
        }
      );
    }
}
