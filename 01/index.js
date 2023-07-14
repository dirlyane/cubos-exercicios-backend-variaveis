function calcularIMC(peso, altura) {
    let imc = peso / (altura ** 2);
    return imc.toFixed(2);
}
function exibirIMC(peso, altura) {
    let imc = calcularIMC(peso, altura);
    console.log(`O IMC calculado é: ${imc}`);
}
let peso = 130;
let altura = 1.65;
exibirIMC(peso, altura);