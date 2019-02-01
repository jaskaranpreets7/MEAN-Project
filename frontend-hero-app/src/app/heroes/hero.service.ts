import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';



import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Injectable()
export class HeroService {

  constructor( private http: Http) {}

  getHeroDetails(data: any): Promise<any> {
    return this.http.get('http://localhost:3000/heroes', data)
    .toPromise()
    .then(response => response.json())
    .catch(error => Promise.reject(error.json() || error));
  }

  // getHeroes(data: any): Observable<any> {
  //   return this.http.get('http://localhost:3000/heroes', data)
  //     .subscribe( response => {
  //       this.a
  //     })
  // }

  addHeroes(data: any): Promise<any> {
    return this.http.post('http://localhost:3000/addHeroes' , data)
    .toPromise()
    .then(res => res.json())
    .catch(error => Promise.reject(error.json() || error));
  }

}
