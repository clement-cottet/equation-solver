import { EquationElement } from './equationElement';
import { create, all } from 'mathjs';

const config = { };
const math = create(all, config);

export interface EquationInterface {
    rightDigit: number;
    rightXDigit: number;
    leftDigit: number;
    leftXDigit: number;
}

export class Equation implements EquationInterface {
    rightDigit: number;
    rightDigitMath: Object;
    rightXDigit: number;
    rightXDigitMath: Object;
    leftDigit: number;
    leftDigitMath: Object;
    leftXDigit: number;
    leftXDigitMath: Object;

    constructor(equation: EquationInterface) {
        this.rightDigit = equation.rightDigit;
        this.rightDigitMath = math.number(this.rightDigit);
        this.leftDigit = equation.leftDigit;
        this.leftDigitMath = math.number(this.leftDigit);
        this.rightXDigit = equation.rightXDigit;
        this.rightXDigitMath = math.number(this.rightXDigit);
        this.leftXDigit = equation.leftXDigit;
        this.leftXDigitMath = math.number(this.leftXDigit);
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
            this.leftXDigitMath = math.fraction(math.add(value, this.leftXDigitMath));
            this.rightXDigit += value;
            this.rightXDigitMath = math.fraction(math.add(value, this.rightXDigitMath));
        } else {
            this.rightDigit += value;
            this.rightDigitMath = math.fraction(math.add(value, this.rightDigitMath));
            this.leftDigit += value;
            this.leftDigitMath = math.fraction(math.add(value, this.leftDigitMath));
        }
    }

    applySoustraction(value: number, xValue: boolean) {
        if (xValue) {
            this.leftXDigit -= value;
            this.leftXDigitMath = math.fraction(math.subtract(this.leftXDigitMath, value));
            this.rightXDigit -= value;
            this.rightXDigitMath = math.fraction(math.subtract(this.rightXDigitMath, value));
        } else {
            this.rightDigit -= value;
            this.rightDigitMath = math.fraction(math.subtract(this.rightDigitMath, value));
            this.leftDigit -= value;
            this.leftDigitMath = math.fraction(math.subtract(this.leftDigitMath, value));
        }
    }

    applyMultiplication(value: number) {
        this.rightXDigit *= value;
        this.rightXDigitMath = math.fraction(math.multiply(value, this.rightXDigitMath));
        this.leftXDigit *= value;
        this.leftXDigitMath = math.fraction(math.multiply(value, this.leftXDigitMath));
        this.rightDigit *= value;
        this.rightDigitMath = math.fraction(math.multiply(value, this.rightDigitMath));
        this.leftDigit *= value;
        this.leftDigitMath = math.fraction(math.multiply(value, this.leftDigitMath));
    }

    applyDivision(value: number) {
        if (value != 0) {
            this.rightXDigit /= value;
            this.rightXDigitMath = math.fraction(math.divide(this.rightXDigitMath, value));
            this.leftXDigit /= value;
            this.leftXDigitMath = math.fraction(math.divide(this.leftXDigitMath, value));
            this.rightDigit /= value;
            this.rightDigitMath = math.fraction(math.divide(this.rightDigitMath, value));
            this.leftDigit /= value;
            this.leftDigitMath = math.fraction(math.divide(this.leftDigitMath, value));
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

    getValueAsString(value: Object): string {
        if (!value.toString().includes('.')) {
            return value.toString();
        } else {
            let ret = math.format(value);
            if (ret.length > 10) return value.toString();
            return ret;
        }
    }

    getRightDigit(): string {
        return this.getValueAsString(this.rightDigitMath);
    }

    getLeftDigit(): string {
        return this.getValueAsString(this.leftDigitMath);
    }

    getRightXDigit(): string {
        return this.getValueAsString(this.rightXDigitMath);
    }

    getLeftXDigit(): string {
        return this.getValueAsString(this.leftXDigitMath);
    }
}