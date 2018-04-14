import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '@services/service.index';
import { Usuario } from '@models/usuario.model';

import Swal from 'sweetalert2';
import { ModalUploadService } from '@components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[] = [];
  range: number = 0;
  registerCount: number = 0;
  toNext: boolean = true;
  toPrev: boolean = false;
  preload: boolean = true;

  constructor(
    public _userServices: UsuarioService,
    public _modalServices: ModalUploadService
  ) { }

  ngOnInit() {
    this.loadUsers();
    this._modalServices.notificación
          .subscribe(res => this.changeRange());
  }

  /**
   * @description Carga usuarios en un rango dado
   */
  loadUsers() {
    this.preload = true;
    this._userServices.loadUsers(this.range)
          .subscribe((res: any) => {
            this.usuarios = res.usuarios;
            this.registerCount = res.count;
            this.preload = false;
          });
  }

  /**
   * @description Cambia el rango de busqueda de usarios
   * @param nRange {numbre} numero que restara o sumara al rango de busqueda actual
   */
  changeRange(nRange: number = 0) {
    const nrange = this.range + nRange;

    if (nrange >= this.registerCount) {
      return;
    }

    if (nrange < 0 ) {
      return;
    }

    this.range += nRange;
    this.toNext = ((this.range + 5) < this.registerCount);
    this.toPrev = ((this.range + 5) > 5);

    this.loadUsers();

  }

  /**
   * @description Busca usuarios con un termino de busqueda dado
   * @param termino {string} el termino a buscar en la DB
   */
  findUsers(termino: string) {
    if (termino.length <= 0) {
      this.changeRange();
      return;
    }
    this.preload = true;
    this._userServices.findColecction(termino)
          .subscribe( (usuarios: any) => {
            this.usuarios = usuarios;
            this.preload = false;
          });
  }

  /**
   * @description Borra un usario de la tabla en la BD
   * @param usuario {Usuario} El usario que sera borrado
   */
  deleteUser(usuario: Usuario) {
    if ( usuario._id === this._userServices.usuario._id) {
      Swal('Error', 'No puede borrar el usuario que le corresponde', 'error' );
      return;
    }

    Swal({
      title: '¿Estas seguro?',
      text:  `Esta apunto de borrar a ${usuario.nombre}` ,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borralo'
    }).then( borrar => {
      if (borrar) {

        this._userServices.deleteUser(usuario._id).subscribe( res => {
          this.changeRange();
        });

      }
    });
  }

  saveUser(usuario: Usuario) {
    this._userServices.updateDataUSer(usuario).subscribe();
  }

  openModal(id: string) {
    this._modalServices.showModal('usuarios', id);
  }
}
