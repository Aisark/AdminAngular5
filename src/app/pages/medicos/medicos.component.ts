import { Component, OnInit } from '@angular/core';
import { Medico } from '@models/medico.model';
import { MedicoService } from '@services/service.index';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: []
})
export class MedicosComponent implements OnInit {

  medicos: Medico[] = [];
  preload: boolean = true;
  range: number = 0;

  constructor(
    public _medicoServices: MedicoService
  ) { }

  ngOnInit() {
    this.loadMedicos();
  }

  findMedicos(id: string) {}

  loadMedicos() {
    this.preload = true;
    this._medicoServices.loadMedicos(this.range)
          .subscribe( medicos => {
            this.medicos = medicos;
            this.preload = false;
          });
  }

  changeRange( range: number) {}

  deleteMedico(medico: Medico) {
    Swal({
      title: '¿Estas seguro?',
      text:  `Esta apunto de borrar el médico ${medico.nombre}` ,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borralo'
    }).then( borrar => {
      if (borrar) {
        this._medicoServices.deleteMedico(medico._id)
              .subscribe(res => this.loadMedicos());
      }
    });
  }
}
