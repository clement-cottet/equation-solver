import { Component, OnInit, Input } from '@angular/core';
import { Equation } from '../equation';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {

  @Input() equation: Equation = {
    rightDigit: 4,
    rightXDigit: 5,
    leftDigit: 6,
    leftXDigit: 7
  };

  constructor() { }

  ngOnInit(): void {
  }

}
