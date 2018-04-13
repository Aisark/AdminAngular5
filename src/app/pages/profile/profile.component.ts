import { Component, OnInit } from '@angular/core';
import { Usuario } from '@models/usuario.model';
import { UsuarioService } from '@services/service.index';
import { NgForm } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;
  imagenUpload: File;
  imagenTemp: string;

  constructor(
    public _userServices: UsuarioService
  ) {
    this.usuario = this._userServices.usuario;
    console.log(this.usuario);
  }

  ngOnInit() {
  }

  /**
   * @description Manda a actualizar los datos del usuario
   * @param form {NgForm} Formulario a procesar
   */
  guardar(usuario: Usuario) {

  console.log(usuario);
  console.log(this.usuario);
  this.usuario.nombre = usuario.nombre;

  if (!this.usuario.google) {
    this.usuario.email = usuario.email;
  }

    this._userServices.updateDataUSer(this.usuario)
          .subscribe();
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

  changeImg() {
    this._userServices.changeImg(this.imagenUpload, this.usuario._id);
  }
}
