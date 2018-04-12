import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Servicios
import { UsuarioService } from '@services/service.index';

import Swal from 'sweetalert2';
import { Usuario } from '@models/usuario.model';

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./loginpages.component.scss']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor(
    public _usuarioServices: UsuarioService,
    public router: Router
  ) { }

  ngOnInit() {
    init_plugins();
    this.forma = new FormGroup({
      nombre: new FormControl( null, Validators.required),
      correo: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false),
    }, {
      validators: this.passwordValidator('password', 'password2')
    });
  }

  passwordValidator(campo1: string, campo2: string) {
    return ( group: FormGroup) => {
      const pass1 = group.controls[campo1].value;
      const pass2 = group.controls[campo2].value;

      // tslint:disable-next-line:curly
      if (pass1 === pass2) return null; // Regresa null si el formulario es valido

      return {
        passwordValidator: true // Esto se regresa si el formulario no es valido
      };

    };
  }

  registrarUser() {
    if (this.forma.invalid) {
      return;
    }
    if (!this.forma.value.condiciones) {
      Swal('Importante', 'Debes acceptar las condiciones', 'warning');
      return;
    }
    const usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.correo,
      this.forma.value.password,
    );

    this._usuarioServices.crearUser(usuario)
          .subscribe( res => this.router.navigate(['/login']));
  }

}
