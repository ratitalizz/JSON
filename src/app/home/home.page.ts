import { Component } from '@angular/core';
// Importar librerías
import { APIService } from '../api.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private apiServ: APIService) { }

  recuperarTodo() {
    this.apiServ.getPosts().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
  }
  recuperarID() {
    this.apiServ.getPost(20).subscribe(
      (data) => { console.log(data); },
      (error) => { console.log(error); }

    );
  }
  recuperarDolar() {
    this.apiServ.getDolar().subscribe(
      (data) => { console.log(data.serie[0].valor); },
      (error) => { console.log(error); }
    );
  }
  crearPost() {
    var post = {
      userId: 1,
      id: 101,
      title: 'Hola mundo',
      body: 'Hola lindo mundo'
    };
    this.apiServ.crearPost(post).subscribe(
      (success) => { console.log(success); },
      (error) => { console.log(error); }
    )
  }
  updatePost() {
    var post = {
      userId: 1,
      id: 20,
      title: 'Hola mundo',
      body: 'Hola lindo mundo'
    };
    this.apiServ.updatePost(20, post).subscribe(
      (success) => { console.log(success); },
      (error) => { console.log(error); } 
    )
  }
  deletePost(){
    this.apiServ.deletePost(20).subscribe(
      (success) => { console.log(success); },
      (error) => { console.log(error); } 
    )
  }
}
