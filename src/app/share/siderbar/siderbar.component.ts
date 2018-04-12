import { Component, OnInit } from '@angular/core';
import { SidebarService, UsuarioService } from '@services/service.index';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styles: []
})
export class SiderbarComponent implements OnInit {

  constructor(
    public _sb: SidebarService,
    public _userServices: UsuarioService
  ) { }

  ngOnInit() {
  }

}
