import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable(
  // providedIn: 'root'
)
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data: any): Observable<boolean> {
    console.log(data);
    return this.http.post<{token: string}>('http://localhost:3000/auth', {username : data.username, password : data.password})
      .pipe(
        map ( result => {
          localStorage.setItem('access_token', result.token);
        return true ;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
  }
  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}
