import { Component } from '@angular/core';
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
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  standalone: true,
  imports: [
    InputTextModule,
    FloatLabelModule,
    ReactiveFormsModule,
    ButtonModule,
    EditorModule,
  ],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css',
})
export class NewPostComponent {
  postGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
  });

  constructor(private postsService: PostsService, private router: Router) {}

  submitPost() {
    const postData = {
      title: this.postGroup.value.title,
      image: this.postGroup.value.image,
      body: this.postGroup.value.body,
    };

    this.postsService.submitPost(postData).subscribe(
      (response) => {
        this.router.navigate(['/']);
      },
      (error) => {
        // Handle error
        console.error('Error submitting post:', error);
      }
    );
  }
}
