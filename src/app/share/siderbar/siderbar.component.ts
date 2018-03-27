import { Component, OnInit } from '@angular/core';
import { SidebarService } from '@services/service.index';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styles: []
})
export class SiderbarComponent implements OnInit {

  constructor(public _sb: SidebarService) { }

  ngOnInit() {
  }

}
