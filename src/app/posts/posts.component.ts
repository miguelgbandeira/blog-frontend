import { Component } from '@angular/core';
import { PostsService } from './posts.service';
import { PostCardComponent } from './post-card/post-card.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostCardComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  constructor(private postsService: PostsService) {}

  posts = this.postsService.posts;
}
