import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo: 'titulo',
      icon: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Dashboard', url: '/dashboard'},
        { titulo: 'Gráficas', url: '/Chart1'},
        { titulo: 'Progreso', url: '/progress' }
      ]
    }
  ];

  constructor() { }

}
