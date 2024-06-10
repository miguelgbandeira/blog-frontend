import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { catchError, of, shareReplay } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  private posts$ = this.http.get<Post[]>('http://localhost:3000/posts/').pipe(
    shareReplay(1),
    catchError((err) => {
      console.log(err);
      return of([]);
    })
  );

  posts = toSignal(this.posts$, { initialValue: [] as Post[] });
}
