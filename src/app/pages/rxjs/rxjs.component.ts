import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { retry } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription = this.observable()
    .subscribe(
      numb => console.log(numb),
      error => console.error(error),
      () => console.log('fin del observador')
    );
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    console.log('se destruyo esta pagina');
    this.subscription.unsubscribe();
  }

  observable(): Observable<any> {
    return  new Observable( observer => {
      let contador = 0;
      const interval  = setInterval( () => {
        contador += 1;
        observer.next(contador);
      }, 500);
    })
    .pipe(
      retry(2)
    );
  }

}
