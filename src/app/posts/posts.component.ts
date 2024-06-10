import { Component } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  constructor(private postsService: PostsService) {}

  posts = this.postsService.posts;
}
