import { Injectable } from '@angular/core';
import { Usuario } from '@models/usuario.model';
import { URL_SERVICES } from '@config/config';
import { HttpClient } from '@angular/common/http';

// Modelos
import { Hospital } from '@models/hospital.model';

import Swal from 'sweetalert2';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class HospitalService {

  constructor(
    public http: HttpClient,
    public _userServices: UsuarioService
  ) {}

  loadHospitals(range: number = 0) {
    const url = `${URL_SERVICES}/hospital?range=${range}`;
    return this.http.get(url);
  }

  /**
   * @description Busca un hospital por id
   * @param id {string} Id del hospital que se desea buscar
   */
  getHospital(id: string) {
    const url = `${URL_SERVICES}/hospital/${id}`;
    return this.http.get(url).map( (res: any) => res.hospital);
  }

  getAllHospitals() {
    const url = `${URL_SERVICES}/hospital/all`;
    return this.http.get(url)
                  .map( (res: any) => res.hospitales);
  }

  /**
   * @description Borra un hospital de la DB
   * @param id {string} Id del hospital que se desea borrar
   */
  deleteHospital(id: string) {
    const url = `${URL_SERVICES}/hospital/${id}?token=${this._userServices.token}`;
    return this.http.delete(url).map( (res: any) => {
      Swal('Datos Actualizados', `El hospital ${ res.hospital.nombre} ha sido borrado`, 'success');
    });
  }

  createHospital(nombre: string) {
    const url = `${URL_SERVICES}/hospital?token=${this._userServices.token}`;
    return this.http.post(url, {nombre})
              .map( (res: any) => {
                Swal('Datos Actualizados', `El hospital ${ res.hospital.nombre} ha sido creado`, 'success');
                return res.hospital;
              });
  }

  updateHospital(hospital: Hospital) {
    const url = `${URL_SERVICES}/hospital/${hospital._id}?token=${this._userServices.token}`;
    return this.http.put(url, hospital)
              .map( (res: any) => {
                Swal('Datos Actualizados', `El hospital ${ res.hospital.nombre} ha sido actualizado`, 'success');
                return true;
              });
  }

  findColecction(termino: string) {
    const url = `${URL_SERVICES}/busqueda/coleccion/hospitales/${termino}`;
    return this.http.get(url).map( (res: any) => res.hospitales);
  }

}
