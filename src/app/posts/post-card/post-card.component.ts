import { Component, Input, OnChanges } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Post } from '../../models/post.model';
import { CommonModule } from '@angular/common';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';
import { TruncatePipe } from '../../truncate.pipe';
import { ChipModule } from 'primeng/chip';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CardModule, CommonModule, TruncatePipe, ChipModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css',
})
export class PostCardComponent implements OnChanges {
  @Input() post: Post;
  sanitizedHtml: SafeHtml;

  constructor(
    private postsService: PostsService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnChanges(): void {
    if (this.post) {
      this.sanitizedHtml = this.sanitizer.bypassSecurityTrustHtml(
        this.post.body
      );
    }
  }

  onClick() {
    this.router.navigate(['/post', this.post._id]);
  }
}
