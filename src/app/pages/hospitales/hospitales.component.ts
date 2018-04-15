import { Component, OnInit } from '@angular/core';
import { Hospital } from '@models/hospital.model';
import { HospitalService } from '@services/service.index';
import { ModalUploadService } from '@components/modal-upload/modal-upload.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {

  hospitales: Hospital[] = [];
  range: number = 0;
  registerCount: number = 0;
  preload: boolean = true;

  constructor(
    public _hospitalServices: HospitalService,
    public _modalServices: ModalUploadService
  ) { }

  ngOnInit() {
    this.loadHospital();
    this.changeRange();
    this._modalServices.notificación.subscribe(res => this.changeRange());
  }

  loadHospital() {
    this.preload = true;
    this._hospitalServices.loadHospitals(this.range)
          .subscribe( (res: any) => {
            this.hospitales = res.hospitales;
            this.registerCount = res.count;
            this.preload = false;
          });
  }

  findHospital(termino: string) {
    if (termino.length <= 0) {
      this.changeRange();
      return;
    }
    console.log(termino);
    this.preload = true;
    this._hospitalServices.findColecction(termino)
          .subscribe( (hospitales: any) => {
            this.hospitales = hospitales;
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

    this.loadHospital();

  }

  openModal(id: string) {
    this._modalServices.showModal('hospitales', id);
  }

  saveHospital(hospital: Hospital) {
    if (!hospital.nombre) {
      Swal('Error', `El nombre del hospital no debe estar vacío`, 'error');
      return;
    }
    this._hospitalServices.updateHospital(hospital)
          .subscribe();
  }

  createHospital() {
    Swal({
      title: 'Crear nuevo hospital',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Crear'
    }).then((result) => {
      if (!result.value) {
        return;
      }
      this._hospitalServices.createHospital(result.value)
            .subscribe( res => this.changeRange());
    });
  }

  deleteHospital(hospital: Hospital) {
    Swal({
      title: '¿Estas seguro?',
      text:  `Esta apunto de borrar el hospital ${hospital.nombre}` ,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borralo'
    }).then( borrar => {
      if (borrar) {
        this._hospitalServices.deleteHospital(hospital._id)
              .subscribe(res => this.changeRange());
      }
    });
  }
}
