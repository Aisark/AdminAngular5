import { Component, OnInit, Input, Output, EventEmitter,  ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('InputProgress') InputProgress: ElementRef;

  @Input('valor') value: number;
  @Input('title') titulo: string;


  // tslint:disable-next-line:no-output-rename
  @Output('valorChange') valueChange: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.value = 50;
    this.titulo = 'Progreso 1';
   }

  ngOnInit() {
  }

  modelChange(event: number) {
    if (event >= 100 ) {
      this.value = 100;
    }else if ( event <= 0 || event == null) {
      this.value = 0;
    }else {
      this.value = event;
    }
    this.InputProgress.nativeElement.value = this.value;
    this.valueChange.emit(this.value);
  }

  changeValue(value: number) {

    this.value += value;
    if (this.value >= 100) {
      this.value = 100;
    }else if (this.value <= 0) {
      this.value = 0;
    }
    // Focus en el inputProgress
    this.InputProgress.nativeElement.focus();
    this.valueChange.emit(this.value);
  }

}
