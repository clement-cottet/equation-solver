import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-equation-component',
  templateUrl: './equation-component.component.html',
  styleUrls: ['./equation-component.component.css']
})
export class EquationComponentComponent implements OnInit {

  @Input() digitContent: number = null;
  @Input() isXPart: boolean;
  @Input() operation: string = null;

  transformedContent: string = '';
  sign: string = '';

  constructor() { }

  ngOnInit(): void {
    if (this.digitContent == null) {
      this.transformedContent = '=';
    } else {
      if (this.digitContent == 0) {
        this.transformedContent = '';
      } else if (this.digitContent == 1 && this.isXPart) {
        this.transformedContent = ' ';
      } else if (this.digitContent < 0 && !this.isXPart) {
        this.sign = '-';
        this.transformedContent = Math.abs(this.digitContent).toLocaleString();
      } else if (this.digitContent > 0 && !this.isXPart) {
        this.sign = '+';
        this.transformedContent = this.digitContent.toLocaleString();
      } else {
        this.transformedContent = this.digitContent.toLocaleString();
      }
    }

    if (this.operation  && (this.operation[0] == '-' || this.operation[0] == '+')) {
      if ((this.isXPart && !this.operation.includes('x')) || (!this.isXPart && this.operation.includes('x'))) {
        this.operation = null;
      }
    }
  }

}
