import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progess: number = 50;

  constructor() { }

  ngOnInit() {
  }

  changeprogress(num: number) {

  }

}
