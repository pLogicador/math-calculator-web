/**
 * Simple Calculator
 * 
 * Developed by: Pedro Miranda (plogicador)
 * Development Date: February 2024
 * 
 * Ela utiliza a função eval para calcular expressões matemáticas inseridas pelo usuário.
 * A calculadora suporta operadores básicos, como adição, subtração, multiplicação e divisão.
 * O usuário pode inserir os números e operadores clicando nos botões ou usando o teclado.
 * A tecla "Enter" também é mapeada para realizar a operação de igualdade.
 * A função construtora Calculator encapsula o comportamento da calculadora.
 *
 * 
 * This is an open-source project with permissions to:
 * - View and modify the source code
 * - Use the code in personal or commercial projects
 * 
 * Restrictions:
 * - Do not claim authorship or ownership
 * - Do not distribute modified versions without attributing original authorship
 * - Do not use the code in a harmful or illegal manner
 * 
 * Refer to the open-source license for more details.
 */

function Calculator(){
    this.display = document.querySelector(".display");

    this.start = () => {
        this.clickButtons()
        this.detectEnterKey();
    };

    this.detectEnterKey = () => {
        document.addEventListener("keyup", (event) => {
            if (event.key && event.key.toLowerCase() !== "enter" ) return;
            this.equals();
        });
    };

    this.clickButtons = () => {
        document.addEventListener("click", (event) => {
            const element = event.target;

            if(element.classList.contains("btn-num") || element.classList.contains('btn-operator')) this.addForDisplay(element);
            if(element.classList.contains('btn-clear')) this.clearDisplay(element);
            if(element.classList.contains('btn-del')) this.deleteOne();
            if(element.classList.contains('btn-eq')) this.equals();

        });
    };

    this.addForDisplay = (element) => {
        this.display.value += element.innerText;
        this.display.focus();
    };

    this.equals = () => {
        try {
            const currentExpression = eval(this.display.value);
            if (!currentExpression) {
                alert("Invalid Calculation!");
                return;    
            }
            this.display.value = String(currentExpression);

        } catch (err) {
            alert("Invalid Calculation!");
            return;
        };
    };

    this.clearDisplay = () => this.display.value = ' ';
    this.deleteOne = () => this.display.value = this.display.value.slice(0, -1);

};

const calculator = new Calculator();
calculator.start();
