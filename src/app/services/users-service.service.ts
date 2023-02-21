import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../models/User';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url: string =
    'https://3000-josefelipee-bingobacken-euug5bsutga.ws-us87.gitpod.io/user';

  constructor(private http: HttpClient, private cookies: CookieService) {}

  public handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.warn('An error occurred:', error.error);
    } else {
      console.warn(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(() =>
      Error('Something bad happened; please try again later.')
    );
  }

  login(user: User): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http
      .post(`${this.url}/login`, user, { headers })
      .pipe(catchError(this.handleError));
  }

  register(user: User): Observable<any | JSON> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(`${this.url}/create`, user, { headers });
  }
  setToken(token: string) {
    this.cookies.set('token', token);
  }
  getToken() {
    this.cookies.get('token');
  }
}
