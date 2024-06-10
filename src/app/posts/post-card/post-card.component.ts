import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Post } from '../../models/post.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CardModule, CommonModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css',
})
export class PostCardComponent {
  @Input() post: Post;
}
