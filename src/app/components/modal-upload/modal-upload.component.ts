import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '@models/usuario.model';
import { UploadFilesService } from '@services/service.index';
import { ModalUploadService } from './modal-upload.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {

  imagenUpload: File;
  imagenTemp: string;

  constructor(
    public _uploadFile: UploadFilesService,
    public _modalUpload: ModalUploadService
  ) { }

  ngOnInit() {
  }

  /**
   * @description Selecciona una imagen del ordenador
   * @param file {File} archivo seleccionado para subir
   */
  selectImg( file: File) {
    // tslint:disable-next-line:curly
    if (!file) {
      this.imagenUpload = null;
      return;
    }

    if ( file.type.indexOf('image') < 0) {
      Swal('Solo imagenes', `El archivo seleccionado no es una imagen`, 'success');
      this.imagenUpload = null;
      return;
    }

    this.imagenUpload = file;

    const reader = new FileReader();
    const urlimgtemp = reader.readAsDataURL(file);

    reader.onloadend = () => this.imagenTemp = reader.result;
  }

  closeModal() {
    this.imagenTemp = null;
    this.imagenUpload = null;
    this._modalUpload.hideModal();
  }

  uploadImg() {
    this._uploadFile.uploadFile(this.imagenUpload, this._modalUpload.tipo, this._modalUpload.id )
          .then( res => {
            this._modalUpload.notificación.emit(res);
            this.closeModal();
          })
          .catch ( err => {});
  }
}
