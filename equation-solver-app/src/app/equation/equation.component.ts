import { Component, OnInit, Input } from '@angular/core';
import { Equation } from '../equation';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {

  @Input() equation: Equation;
  @Input() operation: String;

  constructor() { }

  ngOnInit(): void {
  }

}
