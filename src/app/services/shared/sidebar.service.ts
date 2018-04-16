import { Injectable } from '@angular/core';
import { UsuarioService } from '@services/usuario/usuario.service';

@Injectable()
export class SidebarService {

  menu: any [];

  constructor(
    public _userServices: UsuarioService
  ) {}

  loadMenu() { this.menu = this._userServices.menu; }

}
