import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-page',
  standalone: true,
  imports: [],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.css',
})
export class PostPageComponent implements OnInit {
  subscriptions: Subscription[] = [];
  id: string;
  post: Post;

  constructor(
    private postsService: PostsService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.activeRoute.params.subscribe((params: Params) => {
        this.id = params['id'];
        this.subscriptions.push(
          this.postsService.getPostById(this.id).subscribe((post) => {
            this.post = post;
          })
        );
      })
    );
  }
}
