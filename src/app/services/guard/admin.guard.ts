import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '@services/usuario/usuario.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor (
    public _userServices: UsuarioService
  ) {}

  canActivate() {
    // tslint:disable-next-line:prefer-const
    let auth = (this._userServices.usuario.role === 'ADMIN_ROLE');
    if (!auth) { this._userServices.logOut(); }
    return auth;
  }
}
