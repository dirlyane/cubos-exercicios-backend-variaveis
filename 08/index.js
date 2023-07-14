function calculaComprimento(R){
    let C = 2 * Math.PI * R;
    return C.toFixed(2);
}
function calculaArea(R){
    let A = Math.PI * R**2
    return A.toFixed(2);
}
function exibeResultado(R){
    let C = calculaComprimento(R);
    console.log(`O comprimento do círculo é: ${C}.`);
    let A = calculaArea(R);
    console.log(`A área do círculo é: ${A}.`);
}
exibeResultado(1);