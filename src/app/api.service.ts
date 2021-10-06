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
direccion="https://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient) {}

  //Permite recuperar todos los registros

  getPosts(): Observable<any>{
    return this.http.get(this.direccion)
    .pipe(retry(3) );
  }
  
  getPost(id):Observable<any>{
    return this.http.get(this.direccion+'/'+id).pipe(retry(3));
  }

//Metodo que permite recuperar el valor del dolar
  getDolar():Observable<any>{
    return this.http.get('https://mindicador.cl/api/dolar').pipe(retry(3));
  }
//Método que permite almacenar o inyectar datos
  crearPost(post):Observable<any>{
    return this.http.post(this.direccion,post, this.httpOptions).pipe(retry(3));
  }
//Método para actualizar registro
  updatePost(id,post):Observable<any>{
    return this.http.put(this.direccion+'/'+id, post, this.httpOptions).pipe(retry(2));
  }
//Método para eliminar
deletePost(id):Observable<any>{
  return this.http.delete(this.direccion+'/'+id, this.httpOptions).pipe(retry(2));
  }
}
