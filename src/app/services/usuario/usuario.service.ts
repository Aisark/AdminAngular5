import { Injectable } from '@angular/core';
import { Usuario } from '@models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '@config/config';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.loadFromLocalStorage();
   }

  islogin():  boolean { return this.token.length > 5; }

  logOut() {
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }

  /**
   * @description Carga datos de la pagina que estan en el localStorage
   */
  loadFromLocalStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }else {
      this.token = '';
      this.usuario = null;
    }
  }

  /**
   * @description Guarda en el localStorage datos para inicio de sesión y validación
   * @param res {response} recive datos del usuario
   */
  saveDataUser(res: any) {
    localStorage.setItem('id', res.id);
    localStorage.setItem('token', res.token);
    localStorage.setItem('usuario', JSON.stringify(res.usuario));

    this.token = res.token;
    this.usuario = res.usuario;
  }

  /**
   * @description Inicia sesión con la API de Google
   * @param token
   */
  loginGoogle(token: string) {
    const url = `${URL_SERVICES}/login/google`;
    return this.http.post(url, {token})
                .map( (res: any) => {
                  this.saveDataUser(res);
                  return true;
                });
}

  /**
   * @description Función para agregar un nuevo usuario a la DB mediante email
   * @param usuario {Usuario} modelo usuario de la DB
   */
  crearUser(usuario: Usuario) {
    const url = `${URL_SERVICES}/usuario`;
    return this.http.post(url, usuario)
            .map( (res: any) => {
              Swal('Usuario creado', `Con el correo: ${ usuario.email}`, 'success');
              return res.usuario;
            });
  }

  /**
   * @description Sirve para enviar una petición al servirdor para logear un usuario
   * @param usuario {Usuario} modelo usuario de la DB
   * @param recordar {boolean} bandera para almecenar o barrar email del localStorage
   */
  login(usuario: Usuario, recordar: boolean) {
    if (recordar) {
      localStorage.setItem('email', usuario.email);
    }else {
      localStorage.removeItem('email');
    }
    const url = `${URL_SERVICES}/login`;
    return this.http.post(url, usuario)
          .map( (res: any) => {
            this.saveDataUser(res);
            return true;
          });
  }
}
