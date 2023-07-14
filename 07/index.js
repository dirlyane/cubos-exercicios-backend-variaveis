function simulador(po, x, t) {
    let fracao = t / 7;
    let p = po * x ** fracao;
    console.log("o total de pessoas infectadas será: " + p);
}
simulador(1000, 4, 7);