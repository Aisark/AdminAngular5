import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

// Servicios
import { UsuarioService } from '@services/service.index';
import { Usuario } from '@models/usuario.model';
import { element } from 'protractor';

declare function init_plugins();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./loginpages.component.scss']
})
export class LoginComponent implements OnInit {

  recuerdame: boolean = false;
  email: string;

  // Para la google api
  auth2: any;

  constructor(
    public router: Router,
    public _userServices: UsuarioService,
    private zone: NgZone
  ) { }

  ngOnInit() {
    init_plugins();
    this.googleInit();

    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.recuerdame = true;
    }
  }

  /**
   * Esto es para usar la autenticación de Google
   */
  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '135118374867-f9n3rc8a6me4ncet8oluoer5bval1hnk.apps.googleusercontent.com',
        cookie_policy: 'single_host_origin',
        scope: 'profile email'
      });

      this.attachSingIn( document.getElementById('btnGoogle') );
    });
  }

  /**
   * @description Enlaza el evento clic del boton btnGoogle para poder iniciar sesión
   * con la api de Google
   * @param elemento {htmlRef} recive un elemnto html
   */
  attachSingIn ( elemento: any) {
    this.auth2.attachClickHandler(elemento, {}, gUser => {
      const token = gUser.getAuthResponse().id_token;
      // Utilzar NgZone para que carguen bien la pagina
      this.zone.run( () => {
        this._userServices.loginGoogle(token)
              .subscribe( () => this.router.navigate(['/dashboard']));
      });
    });
  }

  /**
   * Iniciar sesión con un correo y contraseña registrado
   * @param form ngForm
   */
  ingresar(form: NgForm ) {

    if (form.invalid) {
      return;
    }

    const usuario = new Usuario(
      null,
      form.value.email,
      form.value.contraseña
    );

    this._userServices.login(usuario, form.value.recuerdame)
          .subscribe( () => this.router.navigate(['/dashboard']));
    // this.router.navigate(['/dashboard']);
  }

}
