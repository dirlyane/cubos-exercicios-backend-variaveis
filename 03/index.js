function desconto(valorProduto,meuDinheiro){
    let desconto = (meuDinheiro * 100)/valorProduto;
    console.log("O valor do desconto é: "+ desconto.toFixed(2));
}

let meuDinheiro = 80;
let valorProduto = 129.99;
desconto(129.99,80);