import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '@services/usuario/usuario.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(
    public _userServices: UsuarioService,
    public router: Router
  ) {}

  canActivate(): boolean {
    if (this._userServices.islogin()) {
      return true;
    }else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
