//constantes para os números da mega sena
const numbersMega = document.querySelectorAll('.numberMega');
const generateBtnMega = document.querySelector('#generateMega');
//constantes para os números da lotofácil
const numbersLoto = document.querySelectorAll('.numberLoto');
const generateBtnLoto = document.querySelector('#generateLoto');
//constantes para os números da quina
const numbersQuina = document.querySelectorAll('.numberQuina');
const generateBtnQuina = document.querySelector('#generateQuina');

function generateNumbersMega() {
    const max = 60;
    const min = 1;
    const result = [];

    while (result.length < 6) {
        const number = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!result.includes(number)) {
            result.push(number)
        }
    }
    result.sort((a, b) => a - b)
    // console.log(result);
    for (let i = 0; i < numbersMega.length; i++) {
        numbersMega[i].textContent = result[i]
    }
}
generateBtnMega.addEventListener("click", generateNumbersMega);


function generateNumbersLoto() {
    const max = 25;
    const min = 1;
    const result = [];
    while (result.length < 15) {
        const number = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!result.includes(number)) {
            result.push(number)
        }
    }
    result.sort((a,b)=> a - b)
    // console.log(result);
    for(let i = 0; i < numbersLoto.length; i++){
        numbersLoto[i].textContent = result[i]
    }
}
generateBtnLoto.addEventListener("click", generateNumbersLoto);

function generateNumbersQuina(){
    const max = 80;
    const min = 1;
    const result = [];
    while(result.length < 5){
        const number = Math.floor(Math.random() * (max - min +1)) + min;
        if(!result.includes(number)){
            result.push(number)
        }
    }
    result.sort((a,b)=> a - b);
    for(let i = 0; i < numbersQuina.length;i++){
        numbersQuina[i].textContent = result[i]
    }
}
generateBtnQuina.addEventListener("click", generateNumbersQuina)
