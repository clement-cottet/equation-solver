class Equation {
    constructor(rightXFactor, rightConstant, leftXFactor, leftConstant) {
        this.rightXFactor = rightXFactor;
        this.rightConstant = rightConstant;
        this.leftXFactor = leftXFactor;
        this.leftConstant = leftConstant;
    }

    createEquationElementDiv(equationElement, xElement) {
        let div = document.createElement('div');
        div.setAttribute('class', 'col-sm');
        let divText = '';

        if (equationElement == 0) {
            divText = ' ';
        } else if (equationElement < 0) {
            if (xElement) {
                divText = equationElement + 'x';
            } else {
                divText = ' ' + equationElement;
            }
        } else if (equationElement != 0) {
            if (xElement) {
                divText = equationElement + 'x';
            } else {
                divText = ' + ' + equationElement;
            }
        } else {
            throw 'Bad equation element ' + equationElement;
        }
        let divHtmlText = document.createTextNode(divText);
        div.appendChild(divHtmlText);
        return div;
    }

    createEquation() {
        let row = document.createElement('div');
        row.setAttribute('class', 'row equation-row');

        let equalSign = document.createElement('div');
        equalSign.setAttribute('class', 'col-sm');
        equalSign.appendChild(document.createTextNode('='));

        row.appendChild(this.createEquationElementDiv(this.rightXFactor, true));
        row.appendChild(this.createEquationElementDiv(this.rightConstant));
        row.appendChild(equalSign);
        row.appendChild(this.createEquationElementDiv(this.leftXFactor, true));
        row.appendChild(this.createEquationElementDiv(this.leftConstant));
        return row;
    }
}