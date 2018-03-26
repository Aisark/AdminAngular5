import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  // tslint:disable:no-inferrable-types
  progess: number = 10;

  constructor() { }

  ngOnInit() {
  }


}
