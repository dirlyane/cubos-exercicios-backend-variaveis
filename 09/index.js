function calculaSoma(n){
    let S = (n - 2) * 180;
    return S.toFixed(2);
}
function calculaAngulo(n){
    let S = calculaSoma(n);
    let a = S/n;
    return a.toFixed(2); 
}
function exibeResultado(n){
        let S = calculaSoma(n);
        let a = calculaAngulo(n);
        console.log(`A soma dos ângulos internos é ${S} e cada ãngulo vale ${a}.`);
}
exibeResultado(6);