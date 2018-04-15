import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '@config/config';
import { Hospital } from '../../models/hospital.model';
import { UsuarioService } from '@services/usuario/usuario.service';

import Swal from 'sweetalert2';
import { Medico } from '@models/medico.model';



@Injectable()
export class MedicoService {

  totalMedicos: number = 0;

  constructor(
    public http: HttpClient,
    public _userServices: UsuarioService
  ) { }

  /**
   * @description Carga unos medicos
   * @param range {number} El rango de donde se empezara a buscar en la BD
   */
  loadMedicos(range: number) {
    const url = `${URL_SERVICES}/medico?range=${range}`;
    return this.http.get(url)
          .map((res: any) => {
            this.totalMedicos = res.count;
            return res.medicos;
          });
  }

  /**
   * @description Borra un médico atravez de su _id
   * @param id {string} Recive un id para buscar un médico
   */
  deleteMedico(id:  string) {
    const url = `${URL_SERVICES}/medico/${id}?token=${this._userServices.token}`;
    return this.http.delete(url)
          .map( (res: any) => {
            Swal('Médico Borrado', `Se borro el médico ${res.medico.nombre} exitosamente`, 'success' );
            return true;
          });
  }

  createMedico(medico: Medico) {
    let url = `${URL_SERVICES}/medico`;
    const token = `?token=${this._userServices.token}`;

    if (medico._id) {
      // Update
      url += `/${medico._id}${token}`;
      return this.http.put(url, medico)
                .map( (res: any) => {
                  Swal('Médico actualizado', `Se actualizó el médico ${res.medico.nombre} exitosamente`, 'success' );
                  return res.medico;
                });
    }else {
      url += token;
      return this.http.post(url, medico)
                  .map( (res: any) => {
                    Swal('Médico Creado', `Se creó el médico ${res.medico.nombre} exitosamente`, 'success' );
                    return res.medico;
                  });
    }

  }

  getMedico(id: string) {
    const url = `${URL_SERVICES}/medico/${id}`;
    return this.http.get(url)
                .map( (res: any) => res.medico);
  }
}
