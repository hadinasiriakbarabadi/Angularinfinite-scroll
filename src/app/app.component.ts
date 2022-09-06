import { Component, OnInit } from '@angular/core';
import { Comment } from './comment.model';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  throttle = 0;
  distance = 2;
  page = 1;
  commentaries: Comment[] | any[] = [];
  constructor(private commentService: CommentService) {}
  ngOnInit(): void {
    this.commentService
      .getCommentaries(this.page)
      .subscribe((commentaries: Comment[]) => {
        this.commentaries = commentaries;
      });
  }
  onScroll(): void {
    this.commentService
      .getCommentaries(++this.page)
      .subscribe((commentaries: Comment[]) => {
        this.commentaries.push(...commentaries);
      });
  }
}
