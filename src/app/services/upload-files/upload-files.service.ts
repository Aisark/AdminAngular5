import { Injectable } from '@angular/core';
import { resolve, reject } from 'q';
import { URL_SERVICES } from '@config/config';

@Injectable()
export class UploadFilesService {

  constructor() { }

  uploadFile(file: File, tipo: string, id: string) {

    // tslint:disable-next-line:no-shadowed-variable
    return new Promise((resolve, reject) => {

      const formData = new FormData();
      const xhr = new XMLHttpRequest();

      formData.append('imagen', file, file.name);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200 ) {
            resolve(JSON.parse(xhr.response));
          }else {
            reject(xhr.response);
          }
        }
      };

      const url = `${URL_SERVICES}/upload/${tipo}/${id}`;

      xhr.open('PUT', url, true);

      xhr.send(formData);

    });

  }
}
