import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class SignUpService {

  constructor(private http: Http) { }

  signUp(data: any): Promise<any> {
    return this.http.post('localhost:3000/users', data)
      .toPromise()
      .then(res => res.json())
      .catch(error => Promise.reject(error.json() || error));
  }
}
