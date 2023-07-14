function montante (capital, taxa, tempo){
    let m = capital * ((1 + (taxa/100))**tempo) ;
    console.log("O montante é: " + m.toFixed(2));
}
    
montante(1000,12.5,5);