function distancia(xB, xA, yB, yA){
    let d = ((xB - xA)**2) + ((yB - yA)**2);
    console.log("A distância é: "+Math.sqrt(d.toFixed(2)));
}

distancia(1,1,1,4);
