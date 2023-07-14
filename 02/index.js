function conversor(grausFahrenheit){
    let temperaturaCelsius = (temperaturaFahrenheit - 32) * (5/9);
    return temperaturaCelsius.toFixed(2);
}
function exibirTemperaturaCelsius(temperaturaFahrenheit){
    let temperaturaCelsius = conversor(temperaturaFahrenheit);
    console.log(`A temperatura em graus Celsius é de: ${temperaturaCelsius} graus.`);
}
    
let temperaturaFahrenheit = 79;
exibirTemperaturaCelsius(temperaturaFahrenheit);