import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';

interface LoginBody {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginUrl = 'http://localhost:3000/login';

  constructor(private http: HttpClient) {}
  submitLogin(username: string, password: string): Observable<any> {
    const body: LoginBody = { username, password };
    return this.http.post<any>(this.loginUrl, body).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }
}
