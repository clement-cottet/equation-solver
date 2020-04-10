import { EquationElement } from './equationElement';

export interface EquationInterface {
    rightDigit: number;
    rightXDigit: number;
    leftDigit: number;
    leftXDigit: number;
}

export class Equation implements EquationInterface {
    rightDigit: number;
    rightXDigit: number;
    leftDigit: number;
    leftXDigit: number;

    constructor(equation: EquationInterface) {
        this.rightDigit = equation.rightDigit;
        this.leftDigit = equation.leftDigit;
        this.rightXDigit = equation.rightXDigit;
        this.leftXDigit = equation.leftXDigit;
    }

    clone(): Equation {
        let clonedEquation: Equation = new Equation({
            rightDigit: this.rightDigit,
            rightXDigit: this.rightXDigit,
            leftDigit: this.leftDigit,
            leftXDigit: this.leftXDigit
        });
        return clonedEquation;
    }

    applyAddition(value: number, xValue: boolean) {
        if (xValue) {
            this.leftXDigit += value;
            this.rightXDigit += value;
        } else {
            this.rightDigit += value;
            this.leftDigit += value;
        }
    }

    applySoustraction(value: number, xValue: boolean) {
        if (xValue) {
            this.leftXDigit -= value;
            this.rightXDigit -= value;
        } else {
            this.rightDigit -= value;
            this.leftDigit -= value;
        }
    }

    applyMultiplication(value: number) {
        this.rightXDigit *= value;
        this.leftXDigit *= value;
        this.rightDigit *= value;
        this.leftDigit *= value;
    }

    applyDivision(value: number) {
        if (value != 0) {
            this.rightXDigit /= value;
            this.leftXDigit /= value;
            this.rightDigit /= value;
            this.leftDigit /= value;
        }
    }

    isSolved(): boolean {
        if (this.rightXDigit == 1) {
            if (this.rightDigit == 0 && this.leftXDigit == 0) {
                return true;
            }
        }
        if (this.leftXDigit == 1) {
            if (this.leftDigit == 0 && this.rightXDigit == 0) {
                return true;
            }
        }
        return false;
    }
}