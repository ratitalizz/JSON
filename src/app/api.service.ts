import { Injectable } from '@angular/core';
//*librerías/
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'**'
    })
  }

  constructor(private http: HttpClient) {}
  
  getPosts(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .pipe(retry(3) );
  }
}
