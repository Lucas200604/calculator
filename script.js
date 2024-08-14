let numOne = null;
let numTwo = null;
let operador;
let operadorActivo = false;

let valorVizualizacion = 0;
let result = null;
let resultBox = document.getElementById("results");

resultBox.textContent = valorVizualizacion;


function suma(num1, num2) {
    result = num1 + num2;
    return result;
}



function resta(num1, num2) {
    result = parseFloat(num1 - num2);
    return result;
}



function multiplicacion(num1, num2) {
    result = parseFloat(num1 * num2);
    return result;
}



function division(num1, num2) {
    result = parseFloat(num1 / num2);
    return result;
}


function resto(num1, num2) {
    result = parseFloat(num1 % num2);
    return result;
}


function operate(ope, num1, num2) {
    if (ope == `+`) {
        return suma(num1, num2)
    }
    else if (ope == `-`) {
        return resta(num1, num2);
    }
    else if (ope == `*`) {
        return multiplicacion(num1, num2);
    }
    else if (ope == `%`){
        return resto(num1, num2);
    }
    else {
        return division(num1, num2);
    }
}


function updateNum() {
    if (numOne == null) {
        numOne = parseFloat(valorVizualizacion);
        console.log(numOne)
    }
    else if (numTwo == null) {
        numTwo = parseFloat(valorVizualizacion);
        console.log(numTwo)
    }
    else if (numOne !== null && numTwo !== null) {
        numOne = result;
        numTwo = null;
        console.log(`Numero dsp del cambio ${numTwo}`)
    }
}



function displayResult() {
    if (numOne !== null && numTwo !== null) {
        console.log(`Numero 1: ${numOne}   Numero 2: ${numTwo}`)
        valorVizualizacion = operate(operador, numOne, numTwo)
        resultBox.textContent = valorVizualizacion
    }
}






function displayNum(valor) {
    if (operadorActivo == true) {
        valorVizualizacion = ``;
        operadorActivo = false;
        
        
    }
    else if (resultBox.textContent == 0) {
        valorVizualizacion = ``;
    }

    
    valorVizualizacion += valor;
    resultBox.textContent = valorVizualizacion
    

}










let numbers = document.querySelectorAll(".numbers");
let operadores = document.querySelectorAll(".operador");
let equal = document.querySelector(".equal");
let ac = document.querySelector(".ac");
let numberSign = document.querySelector(".number-sign");

numbers.forEach(boton => {
    boton.addEventListener('click', function() {
        // Obtener el valor del botón clicado
        const valor = boton.textContent;
        displayNum(valor);
    });
})


operadores.forEach(boton => {
    boton.addEventListener(`click`, function() {
        operadorActivo = true;
        const valor = boton.textContent;
        updateNum(valorVizualizacion);
        displayResult()
        operador = valor;
        
    })
})


equal.addEventListener(`click`, function() {
    updateNum()
    displayResult()
})

ac.addEventListener(`click`, function() {
    resultBox.textContent = `0`;
    numOne = null;
    numTwo = null;
})



numberSign.addEventListener(`click`, function() {

    if (resultBox.textContent.includes('-')) {
        
        valorVizualizacion = resultBox.textContent.replace("-", "");
        
        console.log(`Result: ${valorVizualizacion}`);
        
        if(result !== null) {
            result = valorVizualizacion;
        }
    
        return resultBox.textContent = valorVizualizacion;
        
    }
    else {
        
        valorVizualizacion = `-${valorVizualizacion}`;
        console.log(`Result: ${valorVizualizacion}`)
        if(result !== null) {
            result = parseInt(valorVizualizacion);
        }
        

        return resultBox.textContent = valorVizualizacion;

    }
})