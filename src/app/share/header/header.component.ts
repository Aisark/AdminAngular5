import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '@services/service.index';
import { Usuario } from '@models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  usuario: Usuario;

  constructor(
    public _userServices: UsuarioService,
    public route: Router
  ) { }

  ngOnInit() {
    this.usuario = this._userServices.usuario;
  }

  busqueda(termino: string) {
    if (!termino) { return; }
    this.route.navigate(['/busqueda', termino]);
  }
}
