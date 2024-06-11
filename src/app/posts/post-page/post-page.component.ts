import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../../models/post.model';
import { ChipModule } from 'primeng/chip';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';
import { LoginService } from '../../login/login.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-post-page',
  standalone: true,
  imports: [ChipModule, CommonModule, ImageModule, ButtonModule],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.css',
})
export class PostPageComponent implements OnInit {
  subscriptions: Subscription[] = [];
  id: string;
  post: Post;

  constructor(
    private postsService: PostsService,
    private authService: LoginService,
    private activeRoute: ActivatedRoute,
    private router: Router
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

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  navigateToEditPost() {
    const currentPath = this.router.url;
    this.router.navigate([`${currentPath}/edit`]);
  }
}
