import { Component, OnInit } from '@angular/core';
import { Equation } from '../equation';

@Component({
  selector: 'app-random-equation-solver',
  templateUrl: './random-equation-solver.component.html',
  styleUrls: ['./random-equation-solver.component.css']
})
export class RandomEquationSolverComponent implements OnInit {

  randomEquation: Equation;
  equationList: Equation[];
  randomMinDigit: number = -10;
  randomMaxDigit: number = 50;
  valueToApply: number = 1;
  xValue: boolean = false;
  operationList: String[];

  constructor() { }

  ngOnInit(): void {
  }

  generateRandomEquation() {
    this.randomEquation = new Equation({
      rightDigit: Math.round(Math.random() * (this.randomMaxDigit - this.randomMinDigit + 1) + this.randomMinDigit),
      rightXDigit: Math.round(Math.random() * (this.randomMaxDigit - this.randomMinDigit + 1) + this.randomMinDigit),
      leftDigit: Math.round(Math.random() * (this.randomMaxDigit - this.randomMinDigit + 1) + this.randomMinDigit),
      leftXDigit: Math.round(Math.random() * (this.randomMaxDigit - this.randomMinDigit + 1) + this.randomMinDigit),
    });
    this.equationList = [this.randomEquation];
    this.operationList = [''];
  }

  applyValueToEquation(operation) {
    let clonedRandomEquation: Equation = this.randomEquation.clone();
    if (operation == '+') {
      clonedRandomEquation.applyAddition(this.valueToApply, this.xValue);
    } else if (operation == '-') {
      clonedRandomEquation.applySoustraction(this.valueToApply, this.xValue);
    } else if (operation == '*') {
      clonedRandomEquation.applyMultiplication(this.valueToApply);
    } else if (operation == '/') {
      clonedRandomEquation.applyDivision(this.valueToApply);
    }
    this.equationList.push(clonedRandomEquation);
    this.randomEquation = clonedRandomEquation;
    this.operationList.push(operation + ' ' + this.valueToApply + (this.xValue ? 'x' : ''));
  }

}
