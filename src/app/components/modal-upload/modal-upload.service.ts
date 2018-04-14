import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ModalUploadService {

  public tipo: string;
  public id: string;

  public oculto: string = 'hidden-element';

  public notificación = new EventEmitter<any>();

  constructor() { }

  hideModal() {
    this.oculto = 'hidden-element';
    this.id = null;
    this.tipo = null;
  }

  showModal(tipo: string, id: string) {
    this.oculto = '';
    this.tipo = tipo;
    this.id = id;
  }
}
