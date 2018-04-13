import { Component, OnInit } from '@angular/core';
import { SidebarService, UsuarioService } from '@services/service.index';
import { Usuario } from '@models/usuario.model';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styles: []
})
export class SiderbarComponent implements OnInit {

  usuario: Usuario;

  constructor(
    public _sb: SidebarService,
    public _userServices: UsuarioService
  ) { }

  ngOnInit() {
    this.usuario = this._userServices.usuario;
  }

}
