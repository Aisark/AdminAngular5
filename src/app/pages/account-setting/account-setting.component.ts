import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '@services/service.index';
import { element } from 'protractor';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html'
})
export class AccountSettingComponent implements OnInit {

  constructor( public _sett: SettingsService ) { }

  ngOnInit() {
  }

  changeColor(tema: string, link: ElementRef ) {

    this.setCheck(link);
    this._sett.setTheme(tema);

  }


  setCheck(link: any) {
    const selectores: any = document.getElementsByClassName('selector');
    for (const item of selectores) {
      item.classList.remove('working');
    }
    link.classList.add('working');
  }
}
