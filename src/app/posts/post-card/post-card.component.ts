import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Post } from '../../models/post.model';
import { CommonModule } from '@angular/common';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CardModule, CommonModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css',
})
export class PostCardComponent {
  @Input() post: Post;

  constructor(private postsService: PostsService, private router: Router) {}

  onClick() {
    this.router.navigate(['/post', this.post._id]);
  }
}
