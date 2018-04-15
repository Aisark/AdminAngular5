import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default-dark.css',
    tema: 'default-dark'
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.loadSettings();
   }

  saveSettings() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  loadSettings() {
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      this.setTheme(this.ajustes.tema);
    }else {
      this.setTheme(this.ajustes.tema);
    }
  }

  setTheme(tema: string) {
    const url: string = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('tema').setAttribute('href', url);

    this.ajustes.temaUrl = url;
    this.ajustes.tema = tema;

    this.saveSettings();
  }

}



interface Ajustes {
  temaUrl: string;
  tema: string;
}

