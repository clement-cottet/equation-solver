import { Component, OnInit, Input } from '@angular/core';
import { Equation } from '../equation';

@Component({
  selector: 'app-equation-list',
  templateUrl: './equation-list.component.html',
  styleUrls: ['./equation-list.component.css']
})
export class EquationListComponent implements OnInit {

  @Input() equations: Equation[];

  constructor() { }

  ngOnInit(): void {
  }

}
