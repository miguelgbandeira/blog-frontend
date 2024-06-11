import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { PostPageComponent } from './posts/post-page/post-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewPostComponent } from './posts/new-post/new-post.component';
import { AuthGuard } from './authguard.service';
import { EditPostComponent } from './posts/edit-post/edit-post.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'posts/new',
    component: NewPostComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'post/:id',
    component: PostPageComponent,
  },
  {
    path: 'post/:id/edit',
    component: EditPostComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full',
  },
];
