import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Dashboard', url: '/dashboard'},
        { titulo: 'Gráficas', url: '/Chart1'},
        { titulo: 'Progreso', url: '/progress' }
      ]
    },
    {
      titulo: 'Mantenimiento',
      icon: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Usuarios', url: '/usuarios'},
        { titulo: 'Médicos', url: '/medicos'},
        { titulo: 'Hospitales', url: '/hospitales' }
      ]
    }
  ];

  constructor() { }

}
