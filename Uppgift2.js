//skapar en funktion som tar emot 2 parametrar
function pyto(a,b) {
    //skapar en variabel som lagrar värdet a upphöjt till 2 + värdet b upphöjt till 2
    let e = Math.pow(a,2) + Math.pow(b,2);
    //tar värdet i e och gör roten ur
    e = Math.sqrt(e);
    //skriver ut
    console.log(e);
    //returnerar
    return e;
    
}
pyto(9,3);