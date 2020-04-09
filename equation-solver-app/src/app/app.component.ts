import { Component, Input } from '@angular/core';
import { Equation } from './equation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  randomEquation: Equation[] = [];
  randomMinDigit: number = -10;
  randomMaxDigit: number = 50;

  generateRandomEquation() {
    this.randomEquation.push({
      rightDigit: Math.round(Math.random() * (this.randomMaxDigit - this.randomMinDigit + 1) + this.randomMinDigit),
      rightXDigit: Math.round(Math.random() * (this.randomMaxDigit - this.randomMinDigit + 1) + this.randomMinDigit),
      leftDigit: Math.round(Math.random() * (this.randomMaxDigit - this.randomMinDigit + 1) + this.randomMinDigit),
      leftXDigit: Math.round(Math.random() * (this.randomMaxDigit - this.randomMinDigit + 1) + this.randomMinDigit),
    });
  }
}
