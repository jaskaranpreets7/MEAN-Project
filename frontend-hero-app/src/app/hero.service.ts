import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';


import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HeroService {

  constructor( private http: Http, private messageService: MessageService) {}

  getHeroes(data: any): Promise<any> {
    return this.http.get('http://localhost:3000/heroes', data)
    .toPromise()
    .then(response => response.json())
    .catch(error => Promise.reject(error.json() || error));
  }

}
