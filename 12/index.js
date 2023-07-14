function calculoTaxa(M,C,n){
    let fracao = 1/n;
    let i = ((((M/C)**fracao - 1)) * 100).toFixed(3);
    console.log(`O seu financiamento de ${C} reais teve uma taxa de juros de ${i}%, pois após ${n} meses você teve que pagar ${M} reais.`)
}

calculoTaxa(90000, 60000, 24);