import { Component, OnInit } from '@angular/core';
import { Medico } from '@models/medico.model';
import { NgForm } from '@angular/forms';
import { HospitalService } from '@services/hospital/hospital.service';
import { Hospital } from '@models/hospital.model';
import { MedicoService } from '@services/service.index';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalUploadService } from '@components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: []
})
export class MedicoComponent implements OnInit {

  medico: Medico = new Medico('', '', '', '', '' );
  hospitales: Hospital[] = [];
  hospital: Hospital = new Hospital('');

  constructor(
    public _hospitalServices: HospitalService,
    public _medicoServices: MedicoService,
    public _router: Router,
    public _acroute: ActivatedRoute,
    public _modalService: ModalUploadService
  ) {
    this._acroute.params.subscribe( params => {
      // tslint:disable-next-line:prefer-const
      let id = params['id'];
      if (id !== 'nuevo') {
        this.getMedico(id);
      }
    });
   }

  ngOnInit() {
    this._hospitalServices.getAllHospitals()
          .subscribe( hospitales => this.hospitales = hospitales);
    this._modalService.notificación.subscribe( res => this.medico.img = res.medico.img );
  }

  /**
   * @description Guarda un nuevo medico
   * @param f {NgForm}
   */
  saveMedico(f: NgForm) {

    if (f.invalid) { return; }

    this._medicoServices.createMedico(this.medico)
          .subscribe( (medico: any) => {
            this.medico._id = medico._id;
            this._router.navigate(['/medico', medico._id]);
          });
  }

  /**
   * @description Obtiene un hospital por su id
   * @param id {string}
   */
  changeHospital(id: string) {
    this._hospitalServices.getHospital(id)
          .subscribe( hospital => this.hospital = hospital);
  }

  /**
   * @description Obtiene un medico por su id
   * @param id {string}
   */
  getMedico(id: string) {
    this._medicoServices.getMedico(id)
          .subscribe(medico => {
            this.medico = medico;
            this.medico.hospital = medico.hospital._id;
            this.changeHospital(this.medico.hospital);
          });
  }

  changeImg(id: string) {
    this._modalService.showModal('medicos', id);
  }
}
