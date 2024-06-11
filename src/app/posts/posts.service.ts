import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Observable, catchError, of, shareReplay } from 'rxjs';
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

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`http://localhost:3000/posts/${id}`).pipe(
      catchError((err) => {
        console.log(err);
        return of();
      })
    );
  }

  submitPost(postData: any): Observable<any> {
    // Assuming postData is an object containing the fields title, image, and body
    return this.http.post('http://localhost:3000/posts/', postData).pipe(
      catchError((err) => {
        console.log(err);
        return of(null); // Returning null or any other appropriate value in case of error
      })
    );
  }
}
