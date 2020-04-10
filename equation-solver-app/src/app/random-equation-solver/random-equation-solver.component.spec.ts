import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomEquationSolverComponent } from './random-equation-solver.component';

describe('RandomEquationSolverComponent', () => {
  let component: RandomEquationSolverComponent;
  let fixture: ComponentFixture<RandomEquationSolverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomEquationSolverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomEquationSolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
