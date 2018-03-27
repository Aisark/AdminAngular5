import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chartdonut',
  templateUrl: './chartdonut.component.html',
})
export class ChartdonutComponent implements OnInit {

  @Input('labels') doughnutChartLabels: string[] = [];
  @Input('datas') doughnutChartData: number[] = [];
  @Input('type') doughnutChartType: string = '';


  constructor() { }

  ngOnInit() {
  }

}
