import { Component, OnDestroy, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from '../../models/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [
    InputTextModule,
    FloatLabelModule,
    ReactiveFormsModule,
    ButtonModule,
    EditorModule,
  ],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css',
})
export class EditPostComponent implements OnInit, OnDestroy {
  post: Post;
  id: string;
  editor: string;
  subscriptions: Subscription[] = [];
  postGroup: FormGroup;

  constructor(
    private postsService: PostsService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.activeRoute.params.subscribe((params: Params) => {
        this.id = params['id'];
        this.loadPost();
      })
    );
  }

  loadPost(): void {
    this.subscriptions.push(
      this.postsService.getPostById(this.id).subscribe(
        (post) => {
          this.post = post;
          this.initializeForm();
        },
        (error) => {
          // Handle error
          console.error('Error loading post', error);
        }
      )
    );
  }

  initializeForm(): void {
    this.postGroup = new FormGroup({
      title: new FormControl(this.post.title, Validators.required),
      image: new FormControl(this.post.image),
      body: new FormControl(this.post.body, Validators.required),
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
  submitPost() {}
}
