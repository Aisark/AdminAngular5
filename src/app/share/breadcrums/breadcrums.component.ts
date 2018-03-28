import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Observer } from 'rxjs/Observer';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: []
})
export class BreadcrumsComponent implements OnInit {

  label: string = '';

  constructor(public router: Router, public _titulo: Title, public meta: Meta) {
    this.getDataRoute()
    .subscribe(data => {
      this.label = data.titulo;
      _titulo.setTitle(this.label);
    });

   }

  ngOnInit() {
  }

  getDataRoute() {
    return this.router.events
      .filter(e => e instanceof ActivationEnd)
      .filter( (e: ActivationEnd ) => e.snapshot.firstChild === null )
      .map((e: ActivationEnd ) => e.snapshot.data);
  }
}
