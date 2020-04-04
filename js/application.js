class Application {
    constructor() {
        this.appContainer = document.getElementById('app-container');
    }

    generateRandomEquation() {
        // Suppression de toutes les equation-row
        let equationRows = document.getElementsByClassName('equation-row');
        for (let equationRow of equationRows) {
            equationRow.remove();
        }

        let max = parseInt(document.getElementById('input-max').value);
        let min = parseInt(document.getElementById('input-min').value);
        let randomEquation = new Equation(
            parseInt((Math.random() * (max - min + 1)), 10) + min,
            parseInt((Math.random() * (max - min + 1)), 10) + min,
            parseInt((Math.random() * (max - min + 1)), 10) + min,
            parseInt((Math.random() * (max - min + 1)), 10) + min
        );
        let randomEquationDiv = randomEquation.createEquation();
        equationApplication.appContainer.appendChild(randomEquationDiv);
    }

}

let equationApplication = new Application();