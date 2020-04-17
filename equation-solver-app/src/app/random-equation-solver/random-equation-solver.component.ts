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
  randomMaxDigit: number = 10;
  valueToApplyText: String = '1';
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

  transformApplyValueText(): boolean {
    if (this.valueToApplyText.match(/^[-]{0,1}\d*x{0,1}$/)) {
      let regex = /([-]{0,1})(\d*)(x{0,1})/;
      let regexFound = this.valueToApplyText.match(regex);
      let digit = null;
      if (regexFound[2]) {
        digit = parseInt(regexFound[1] + regexFound[2]);
      } else if (regexFound[1] && !regexFound[2]) {
        digit = -1;
      } else if (regexFound[3] && !regexFound[2]) {
        digit = 1;
      }
      if (digit) {
        this.xValue = regexFound[3] == 'x';
        this.valueToApply = digit;
      } else {
        alert("La valeur donnée n'est pas valide");
        return false;
      }
    } else {
      alert("La valeur donnée n'est pas valide");
      return false;
    }
    return true;
  }
  
  applyValueToEquation(operation) {
    // Calcul valueToApply from valueToApplyText
    let isTransformed = this.transformApplyValueText();
    if (isTransformed) {
      let clonedRandomEquation: Equation = this.randomEquation.clone();
      if (operation == '+') {
        clonedRandomEquation.applyAddition(this.valueToApply, this.xValue);
      } else if (operation == '-') {
        clonedRandomEquation.applySoustraction(this.valueToApply, this.xValue);
      } else if (operation == 'X') {
        clonedRandomEquation.applyMultiplication(this.valueToApply);
      } else if (operation == '/') {
        clonedRandomEquation.applyDivision(this.valueToApply);
      }
      this.equationList.push(clonedRandomEquation);
      this.randomEquation = clonedRandomEquation;
      this.operationList.splice(this.operationList.length-1, 0, operation + ' ' + this.valueToApply + (this.xValue ? 'x' : ''));
  
      if (this.randomEquation.isSolved()) {
        alert("Bravo ! Tu as résolu l'équation !");
      }
    }

  }

}
