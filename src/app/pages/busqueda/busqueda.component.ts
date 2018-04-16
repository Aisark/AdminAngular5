import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '@config/config';
import { Usuario } from '@models/usuario.model';
import { Medico } from '@models/medico.model';
import { Hospital } from '@models/hospital.model';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  usuarios: Usuario[] = [];
  medicos: Medico[] = [];
  hospitales: Hospital[] = [];

  constructor(
    public acroute: ActivatedRoute,
    public http: HttpClient
  ) {
    this.acroute.params.subscribe( (params: any) => {
      // tslint:disable-next-line:prefer-const
      let termino = params['termino'];
      this.buscar(termino);
    });
   }

  ngOnInit() {
  }

  buscar(termino: string) {
    const url = `${URL_SERVICES}/busqueda/all/${termino}`;
    this.http.get(url)
          .subscribe( (res: any) => {
            this.usuarios = res.usuarios;
            this.hospitales = res.hospitales;
            this.medicos = res.medicos;
          });
  }
}
