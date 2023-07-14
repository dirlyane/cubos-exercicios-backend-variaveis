function velocidade(distancia, tempo){
    let velocidade = distancia/tempo;
    let conversao = velocidade * 3.6;
    console.log("A velocidade em km/h é: "+conversao+" km/h")
}
velocidade(500,10);